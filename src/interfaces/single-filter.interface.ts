import { FilterOperatorEnum } from '../enums';

export interface SingleFilterInterface {
   field: string;
   operator: FilterOperatorEnum;
   values: string[];
}
