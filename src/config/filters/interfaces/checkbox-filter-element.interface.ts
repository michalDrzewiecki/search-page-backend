import { FilterElementInterface } from './filter-element.interface';
import { MultipleOptionsFilterElementInterface } from './multiple-options-filter-element.interface';

export interface CheckboxFilterElementInterface extends FilterElementInterface, MultipleOptionsFilterElementInterface {
  selectAllOption: boolean;
}
