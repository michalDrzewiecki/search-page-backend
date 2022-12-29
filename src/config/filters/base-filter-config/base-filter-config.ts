import { MarketEnum } from '../../../enums';
import { FilterElementType } from '../types';
import enBaseFilterData from './markets/en';
import plBaseFilterData from './markets/pl';

const baseFilterData = {
  [MarketEnum.en]: enBaseFilterData,
  [MarketEnum.pl]: plBaseFilterData
}

export const getBaseFilterConfig = (market: MarketEnum): FilterElementType[] => baseFilterData[market] ?? enBaseFilterData;
