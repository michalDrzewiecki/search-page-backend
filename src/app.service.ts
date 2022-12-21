import { Injectable } from '@nestjs/common';
import { StatusEnum } from './enums';
import { ProductInterface } from './interfaces';
import { generatedProducts } from './main';

@Injectable()
export class AppService {

  public getProducts(): ProductInterface[] {
    return generatedProducts;
  }

  public getRecommendedProducts(): ProductInterface[] {
    return generatedProducts.filter(product => product.status.includes(StatusEnum.recommended)).slice(0, 4);
  }
}
