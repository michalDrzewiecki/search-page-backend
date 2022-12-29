import { FilterElementInterface } from './filter-element.interface';
import { MultipleOptionsFilterElementInterface } from './multiple-options-filter-element.interface';

export interface SelectFilterElementInterface extends FilterElementInterface, MultipleOptionsFilterElementInterface {
  defaultOption?: string;
}
