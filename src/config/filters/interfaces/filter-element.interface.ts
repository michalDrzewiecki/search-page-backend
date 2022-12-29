import { FilterElementTypeEnum } from '../../../enums';

export interface FilterElementInterface {
  type: FilterElementTypeEnum;
  title: string;
  filterElementName: string;
  details?: string;
  isHidden: boolean;
}
