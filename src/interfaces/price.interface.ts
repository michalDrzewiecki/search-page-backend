import { CurrencyEnum } from '../enums';

export interface PriceInterface {
  current: number;
  previous: number;
  currency: CurrencyEnum;
}
