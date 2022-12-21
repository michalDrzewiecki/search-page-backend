import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductInterface } from './interfaces';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  public async getProducts(): Promise<ProductInterface[]> {
    return this.appService.getProducts();
  }

  @Get('recommended')
  public async getRecommended(): Promise<ProductInterface[]> {
    return this.appService.getRecommendedProducts();
  }
}
