import { Injectable } from '@nestjs/common';
import { StatusEnum } from './enums';
import { FilterInterface, ProductInterface, SliceDataInterface, SortDataInterface } from './interfaces';
import { generatedProducts } from './main';
import { FilterParser } from './utils/filter.parser';
import { SortParser } from './utils/sort.parser';

@Injectable()
export class AppService {

  public getProducts({
    offset,
    limit,
    filter,
    sort
 }: FilterInterface): ProductInterface[] {
    const filterData = new FilterParser(filter).getFilterData()
    const filteredProducts = filterData ? this.getFilteredProducts(generatedProducts, filterData) : generatedProducts;
    const sortData = new SortParser(sort).getSortData();
    const sortedProducts = sortData ? this.getSortedProducts(filteredProducts, sortData) : generatedProducts;
    return sortedProducts.slice(offset, limit);
  }

  public getRecommendedProducts(): ProductInterface[] {
    return generatedProducts.filter(product => product.status.includes(StatusEnum.recommended)).slice(0, 4);
  }

  private getFilteredProducts(products: ProductInterface[], filterData: any): ProductInterface[] {
    return [];
  }

  private getSortedProducts(products: ProductInterface[], sortData: SortDataInterface): ProductInterface[] {
    return products;
  }

}
