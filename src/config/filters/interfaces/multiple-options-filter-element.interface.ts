import { FilterElementInterface } from './filter-element.interface';

export interface MultipleOptionsFilterElementInterface extends FilterElementInterface {
  options?: {
    displayName: string;
    value: string;
  }[];
}
