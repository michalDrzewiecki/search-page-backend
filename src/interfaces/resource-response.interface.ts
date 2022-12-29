import { CategoriesEnum } from '../enums';
import { SubcategoryType } from '../types/subcategory.type';

export interface ResourceResponseInterface<T> {
  data: T[];
  count: number;
  detectedCategory?: CategoriesEnum;
  detectedSubcategory?: SubcategoryType;
}
