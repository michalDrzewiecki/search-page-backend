import { CategoriesEnum, StatusEnum } from '../../enums';
import { SubcategoryType } from '../../types/subcategory.type';
import { PriceInterface } from '../price.interface';

export interface ProductFieldDataInterface {
  displayName: string;
  value: string;
}

export interface ProductToDisplayInterface {
  id: string;
  imgUrl: string;
  name: string;
  price: PriceInterface;
  producer: ProductFieldDataInterface;
  guarantee: ProductFieldDataInterface;
  state: ProductFieldDataInterface;
  status: StatusEnum[];
  locations: string[];
  soldAmount: number;
  category: CategoriesEnum;
  subcategory: SubcategoryType;
  additionalFields: Record<string, ProductFieldDataInterface | ProductFieldDataInterface[]>
}
