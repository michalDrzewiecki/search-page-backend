import { Controller, DefaultValuePipe, Get, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductInterface, ResourceResponseInterface } from './interfaces';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  public async getProducts(
    @Query('offset', new DefaultValuePipe(0), new ParseIntPipe()) offset: number,
    @Query('limit', new DefaultValuePipe(100), new ParseIntPipe()) limit: number,
    @Query('filter', new DefaultValuePipe('')) filter: string,
    @Query('sort', new DefaultValuePipe('')) sort: string,
    @Query('search', new DefaultValuePipe('')) search: string
  ): Promise<ResourceResponseInterface<ProductInterface>> {
    return this.appService.getProducts({
      offset,
      limit,
      filter,
      sort,
      search
    });
  }


  @Get('recommended')
  public async getRecommended(): Promise<ProductInterface[]> {
    return this.appService.getRecommendedProducts();
  }
}
