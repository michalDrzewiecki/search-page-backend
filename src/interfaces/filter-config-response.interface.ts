import { FilterElementInterface } from '../config/filters/interfaces';
import { SortOptionInterface } from '../config/sort/interfaces';

export interface FilterConfigResponseInterface {
  filters: FilterElementInterface[];
  sort: SortOptionInterface[];
}
