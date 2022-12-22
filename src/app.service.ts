import { Injectable } from '@nestjs/common';
import { FilterOperatorEnum, StatusEnum } from './enums';
import {
  FilterInterface,
  ProductInterface,
  ResourceResponseInterface,
  SingleFilterInterface,
  SortDataInterface
} from './interfaces';
import { generatedProducts } from './main';
import { FilterParser } from './utils/filter.parser';
import { SortParser } from './utils/sort.parser';

//NOTE: this whole file has been prepared to handle only some specific cases related to specific requests
// to reuse it somewhere it has to be rewritten
@Injectable()
export class AppService {

  public getProducts({
    offset,
    limit,
    filter,
    sort,
    search,
 }: FilterInterface): ResourceResponseInterface<ProductInterface> {
    const searchedProducts = search ? this.getSearchedProducts(generatedProducts, search) : generatedProducts;
    const filterData = new FilterParser(filter).getFilterData()
    const filteredProducts = filterData ? this.getFilteredProducts(searchedProducts, filterData) : searchedProducts;
    const sortData = new SortParser(sort).getSortData();
    const sortedProducts = sortData ? this.getSortedProducts(filteredProducts, sortData) : filteredProducts;
    return {
      data: sortedProducts.slice(offset, limit),
      count: sortedProducts.length
    }
  }

  public getRecommendedProducts(): ProductInterface[] {
    return generatedProducts.filter(product => product.status.includes(StatusEnum.recommended)).slice(0, 4);
  }

  private getSearchedProducts(products: ProductInterface[], search: string): ProductInterface[] {
    const forbiddenFields = ['id', 'imgUrl'];
    return products.filter(product => {
      for (const key in product) {
        if (forbiddenFields.includes(key)) {
          continue;
        }
        const value = product[key];
        let exists: boolean;
        if (Array.isArray(value) || typeof value === 'object') {
          exists = JSON.stringify(value).toLowerCase().includes(search.toLowerCase());
        }
        else {
          exists = value.toString().toLowerCase().includes(search.toLowerCase());
        }
        if (exists) {
          return true;
        }
      }
      return false;
    })
  }

  private getFilteredProducts(products: ProductInterface[], filterData: SingleFilterInterface[]): ProductInterface[] {
    return products.filter(product => {
      let isValid: boolean = true;
      for (const singleFilterData of filterData) {
        const {values, field, operator} = singleFilterData;
        const fieldCheck = field.split('.');
        const value = fieldCheck[1] ? product[fieldCheck[0]][fieldCheck[1]] : product[field];
        let filterResult: boolean;
        switch (operator) {
          case FilterOperatorEnum.gt:
            filterResult = value >= values[0];
            break;
          case FilterOperatorEnum.lt:
            filterResult = value <= values[0];
            break;
          case FilterOperatorEnum.eq:
            filterResult = Array.isArray(value) ? value.some(singleValue => values.includes(singleValue.toString())) : values.includes(value.toString());
            break;
          case FilterOperatorEnum.between:
            filterResult = value >= values[0] && value <= values[1];
            break;
          default:
            filterResult = true;
            break;
        }
        if (!filterResult) {
          isValid = false;
          break;
        }
      }
      return isValid;
    });
  }

  private getSortedProducts(products: ProductInterface[], {value, field}: SortDataInterface): ProductInterface[] {
    const fieldCheck = field.split('.');
    if (fieldCheck[1]) {
      return products.sort((a, b) => value === 1 ? a[fieldCheck[0]][fieldCheck[1]] - b[fieldCheck[0]][fieldCheck[1]] : b[fieldCheck[0]][fieldCheck[1]] - a[fieldCheck[0]][fieldCheck[1]]);
    }
    return products.sort((a, b) => value === 1 ? a[field] - b[field] : b[field] - a[field]);
  }
}
