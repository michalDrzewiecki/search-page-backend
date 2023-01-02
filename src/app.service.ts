import { BadRequestException, Injectable } from '@nestjs/common';
import { getCategories } from './config/categories';
import { getFilters } from './config/filters/filter-config/filter-config';
import { getProductPerMarket } from './config/product-fields';
import { getSortConfig } from './config/sort/sort-config';
import { CategoriesEnum, FilterOperatorEnum, MarketEnum, StatusEnum } from './enums';
import {
  FilterConfigResponseInterface,
  FilterInterface,
  ResourceResponseInterface,
  SingleFilterInterface,
  SortDataInterface
} from './interfaces';
import { CategoryInterface } from './interfaces/category.interface';
import { ProductInterface } from './interfaces/product';
import { ProductToDisplayInterface } from './interfaces/product/product-to-display.interface';
import { generatedProducts } from './main';
import { SubcategoryType } from './types/subcategory.type';
import { FilterParser } from './utils/filter.parser';
import { SortParser } from './utils/sort.parser';

//NOTE: this whole file has been prepared to handle only some specific cases related to specific requests
// to reuse it somewhere it has to be rewritten
@Injectable()
export class AppService {

  public getProduct(id: string, market: MarketEnum): ProductToDisplayInterface {
    const product = generatedProducts.find(product => product.id === id);
    if (!product) {
      throw new BadRequestException(`Product with ${id} id does not exist`);
    }
    return getProductPerMarket(product, market);
  }

  public getFilterConfigResponse(market: MarketEnum, category?: CategoriesEnum, subcategory?: SubcategoryType): FilterConfigResponseInterface {
    const filters = getFilters(market, category, subcategory);
    const sort = getSortConfig(market);
    return {
      filters,
      sort
    }
  }

  public getCategories(market: MarketEnum): CategoryInterface[] {
    const categories = getCategories(market);
    return categories.map(category => {
      const subcategories = category.subcategories;
      let totalProductAmountInCategory: number = 0;
      const extendedSubcategories = subcategories.map(subcategory => {
        const products = generatedProducts.filter(p => p.subcategory === subcategory.name);
        totalProductAmountInCategory += products.length;
        return {
          ...subcategory,
          count: products.length
        }
      });
      return {
        ...category,
        subcategories: extendedSubcategories,
        count: totalProductAmountInCategory
      }
    });
  }

  public getProducts({
    offset,
    limit,
    filter,
    sort,
    search,
    category,
    subcategory
 }: FilterInterface): ResourceResponseInterface<ProductInterface> {
    const filteredByCategoryProducts = this.getFilteredByCategoryProducts(generatedProducts, category, subcategory);
    const {data, detectedSubcategory, detectedCategory} = this.getSearchedProducts(filteredByCategoryProducts, search);
    const filterData = new FilterParser(filter).getFilterData()
    const filteredProducts = filterData ? this.getFilteredProducts(data, filterData) : data;
    const sortData = new SortParser(sort).getSortData();
    const sortedProducts = sortData ? this.getSortedProducts(filteredProducts, sortData) : filteredProducts;
    return {
      count: sortedProducts.length,
      data: sortedProducts.splice(offset, limit),
      detectedSubcategory,
      detectedCategory
    }
  }

  public getRecommendedProducts(category: CategoriesEnum): ProductInterface[] {
    const recommendedProducts = generatedProducts.filter(product => product.category === category && product.status.includes(StatusEnum.recommended));
    const selectedProducts: ProductInterface[] = [];
    const selectedIndexes: number[] = [];
    if (recommendedProducts.length <= 4) {
      return recommendedProducts;
    }
    while (selectedProducts.length !== 4) {
      const rand = Math.round(Math.random() * ((recommendedProducts.length - 1)));
      if (selectedIndexes.includes(rand)) {
        continue;
      }
      selectedProducts.push(recommendedProducts[rand]);
      selectedIndexes.push(rand);
    }
    return selectedProducts;
  }

  private getSearchedProducts(products: ProductInterface[], search: string): Pick<ResourceResponseInterface<ProductInterface>, 'data' | 'detectedCategory' | 'detectedSubcategory'>{
    if (!search) {
      return {
        data: products
      };
    }
    const forbiddenFields = ['id', 'imgUrl'];
    const foundProducts = products.filter(product => {
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
    });

    return {
      data: foundProducts
    }
  }

  private getFilteredProducts(products: ProductInterface[], filterData: SingleFilterInterface[]): ProductInterface[] {
    return products.filter(product => {
      let isValid: boolean = true;
      for (const singleFilterData of filterData) {
        const {values, field, operator} = singleFilterData;
        const fieldCheck = field.split('.');
        const value = fieldCheck[1] ? product[fieldCheck[0]][fieldCheck[1]] : product[field];
        if (!value) {
          continue;
        }
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

  private getFilteredByCategoryProducts(products: ProductInterface[], category?: string, subcategory?: string): ProductInterface[] {
    if (!category) {
      return products;
    }
    if (!subcategory) {
      return products.filter(product => product.category === category);
    }
    return products.filter(product => product.category === category && product.subcategory === subcategory);
  }

  private getSortedProducts(products: ProductInterface[], {value, field}: SortDataInterface): ProductInterface[] {
    const fieldCheck = field.split('.');
    if (fieldCheck[1]) {
      return products.sort((a, b) => value === 1 ? a[fieldCheck[0]][fieldCheck[1]] - b[fieldCheck[0]][fieldCheck[1]] : b[fieldCheck[0]][fieldCheck[1]] - a[fieldCheck[0]][fieldCheck[1]]);
    }
    return products.sort((a, b) => value === 1 ? a[field] - b[field] : b[field] - a[field]);
  }
}
