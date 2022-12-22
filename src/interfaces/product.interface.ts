import { GuaranteeEnum, StateEnum, StatusEnum } from '../enums';
import { PriceInterface } from './price.interface';

export interface ProductInterface {
  id: string;
  imgUrl: string;
  name: string;
  price: PriceInterface;
  ramAmount: number;
  producer: string;
  guarantee: GuaranteeEnum;
  state: StateEnum;
  status: StatusEnum[];
  locations: string[];
  soldAmount: number;
}
