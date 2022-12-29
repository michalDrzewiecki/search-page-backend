import { MarketEnum } from '../../enums';
import enMarketCategories from './markets/en';
import plMarketCategories from './markets/pl';

const marketCategoriesData = {
  [MarketEnum.en]: enMarketCategories,
  [MarketEnum.pl]: plMarketCategories
};

export const getAllCategories = () => [...enMarketCategories, ...plMarketCategories];

export const getCategories = (market: MarketEnum) => marketCategoriesData[market] ?? enMarketCategories;
