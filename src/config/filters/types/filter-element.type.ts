import {
  CheckboxFilterElementInterface,
  RadioFilterElementInterface, RangeFilterElementInterface,
  SelectFilterElementInterface
} from '../interfaces';

export type FilterElementType = RadioFilterElementInterface | CheckboxFilterElementInterface | SelectFilterElementInterface | RangeFilterElementInterface;
