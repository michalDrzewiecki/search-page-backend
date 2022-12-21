import { Controller, DefaultValuePipe, Get, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductInterface } from './interfaces';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  public async getProducts(
    @Query('offset', new ParseIntPipe()) offset: number,
    @Query('limit', new ParseIntPipe()) limit: number,
    @Query('filter', new DefaultValuePipe('')) filter: string,
    @Query('sort', new DefaultValuePipe('')) sort: string
  ): Promise<ProductInterface[]> {
    return this.appService.getProducts({
      offset,
      limit,
      filter,
      sort
    });
  }

  @Get('recommended')
  public async getRecommended(): Promise<ProductInterface[]> {
    return this.appService.getRecommendedProducts();
  }
}
