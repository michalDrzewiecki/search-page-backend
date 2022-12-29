import { CategoriesEnum } from '../../../enums';
import { SubcategoryType } from '../../../types/subcategory.type';
import { FilterElementType } from '../types';

export interface FilterConfigInterface {
  resource: CategoriesEnum;
  filters: FilterElementType[];
  subResources: {
    resource: SubcategoryType;
    filters: FilterElementType[]
  }[];
}
