import { GuaranteeEnum, StateEnum, StatusEnum } from '../enums';
import { PriceInterface } from './price.interface';

interface NumericRangeInterface {
  max: number;
  min: number;
}

export interface FilterInterface {
  status: StatusEnum[];
  state: StateEnum;
  price: NumericRangeInterface;
  ramAmount: NumericRangeInterface;
  name: string;
  producer: string[];
  guarantee: GuaranteeEnum;
}
