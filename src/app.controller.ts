import { Controller, DefaultValuePipe, Get, Param, ParseEnumPipe, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CategoriesEnum, MarketEnum } from './enums';
import { FilterConfigResponseInterface, ResourceResponseInterface } from './interfaces';
import { CategoryInterface } from './interfaces/category.interface';
import { ProductInterface } from './interfaces/product';
import { ProductToDisplayInterface } from './interfaces/product/product-to-display.interface';
import { SubcategoryType } from './types/subcategory.type';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('categories')
  public getCategories(
    @Query('market', new DefaultValuePipe(MarketEnum.en), new ParseEnumPipe(MarketEnum)) market: MarketEnum
  ): CategoryInterface[] {
    return this.appService.getCategories(market);
  }

  @Get('filters')
  public getFilters(
    @Query('market', new DefaultValuePipe(MarketEnum.en), new ParseEnumPipe(MarketEnum)) market: MarketEnum,
    @Query('category') category?: string,
    @Query('subcategory') subcategory?: string
  ): FilterConfigResponseInterface {
    return this.appService.getFilterConfigResponse(market, category as CategoriesEnum, subcategory as SubcategoryType);
  }

  @Get('')
  public getProducts(
    @Query('offset', new DefaultValuePipe(0), new ParseIntPipe()) offset: number,
    @Query('limit', new DefaultValuePipe(100), new ParseIntPipe()) limit: number,
    @Query('filter', new DefaultValuePipe('')) filter: string,
    @Query('sort', new DefaultValuePipe('')) sort: string,
    @Query('search', new DefaultValuePipe('')) search: string,
    @Query('category') category?: string,
    @Query('subcategory') subcategory?: string
  ): ResourceResponseInterface<ProductInterface> {
    return this.appService.getProducts({
      offset,
      limit,
      filter,
      sort,
      search,
      category,
      subcategory
    });
  }

  @Get('recommended')
  public async getRecommended(
    @Query('category', new ParseEnumPipe(CategoriesEnum)) category: CategoriesEnum,
  ): Promise<ProductInterface[]> {
    return this.appService.getRecommendedProducts(category);
  }

  @Get('single/:id')
  public async getSingleProductData(
    @Param('id') id: string,
    @Query('market', new DefaultValuePipe(MarketEnum.en), new ParseEnumPipe(MarketEnum)) market: MarketEnum
  ): Promise<ProductToDisplayInterface> {
    return this.appService.getProduct(id, market);
  }
}
