import { CategoriesEnum, FilterElementTypeEnum, MarketEnum } from '../../../enums';
import { generatedProducts } from '../../../main';
import { SubcategoryType } from '../../../types/subcategory.type';
import { getBaseFilterConfig } from '../base-filter-config/base-filter-config';
import { MultipleOptionsFilterElementInterface, SelectFilterElementInterface } from '../interfaces';
import { FilterElementType } from '../types';
import enFilterConfig from './markets/en';
import plFilterConfig from './markets/pl';

const filterConfigData = {
  [MarketEnum.en]: enFilterConfig,
  [MarketEnum.pl]: plFilterConfig
};

const extendFilters = (filters: FilterElementType[], category?: CategoriesEnum, subcategory?: SubcategoryType): FilterElementType[] => {
  if (!filters.length) {
    return [];
  }
  return filters.map(filterData => {
    const {type} = filterData;
    if (type === FilterElementTypeEnum.range) {
      return filterData
    }
    const {options, filterElementName} = filterData as MultipleOptionsFilterElementInterface;
    if (options?.length) {
      const defaultOption = (filterData as SelectFilterElementInterface)?.defaultOption;
      if (defaultOption && !options.find(option => option.value === '')) {
        options.unshift({
          displayName: defaultOption,
          value: ''
        });
      }
      return filterData;
    }
    const availableProducts = generatedProducts.filter(product => {
      if (!!!product[filterElementName]) {
        return false;
      }
      if (subcategory) {
        return product.subcategory === subcategory;
      }
      if (category) {
        return product.category === category;
      }
      return true;
    })
    const availableValues = new Set<string>();
    availableProducts.forEach(product => {
      if (Array.isArray(product[filterElementName])) {
        product[filterElementName].forEach(value => {
          availableValues.add(value);
        })
      } else {
        availableValues.add(product[filterElementName]);
      }
    });
    const generatedOptions = Array.from(availableValues).map(value => ({
      displayName: value,
      value
    }));
    const defaultOption = (filterData as SelectFilterElementInterface)?.defaultOption;
    if (defaultOption) {
      generatedOptions.unshift({
        displayName: defaultOption,
        value: ''
      });
    }
    return {
      ...filterData,
      options: generatedOptions
    }
  });
}

export const getFilters = (market: MarketEnum, category: CategoriesEnum, subcategory?: SubcategoryType) => {
  const baseFilters = getBaseFilterConfig(market);
  const filters = filterConfigData[market];
  const categoryFiltersConfig = filters.find(filterConfig => filterConfig.resource === category);
  const categoryFilters = categoryFiltersConfig?.filters || [];
  const subcategoryFiltersConfig = categoryFiltersConfig?.subResources?.find(subcategoryConfig => subcategoryConfig.resource === subcategory);
  const subcategoryFilters = subcategoryFiltersConfig?.filters || [];
  return [...extendFilters(baseFilters), ...extendFilters(categoryFilters, category), ...extendFilters(subcategoryFilters, category, subcategory)];
}
