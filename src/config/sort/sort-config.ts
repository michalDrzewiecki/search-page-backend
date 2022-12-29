import { MarketEnum } from '../../enums';
import { SortOptionInterface } from './interfaces';
import enSortConfig from './locations/en';
import plSortConfig from './locations/pl';

const sortConfigData = {
  [MarketEnum.en]: enSortConfig,
  [MarketEnum.pl]: plSortConfig
};

export const getSortConfig = (market: MarketEnum): SortOptionInterface[] => sortConfigData[market] || enSortConfig;

