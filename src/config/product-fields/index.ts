import { MarketEnum } from '../../enums';
import { ProductInterface } from '../../interfaces/product';
import {
  ProductFieldDataInterface,
  ProductToDisplayInterface
} from '../../interfaces/product/product-to-display.interface';
import { ProductFieldPerMarketInterface } from './interfaces';
import enMarketProductFields from './markets/en';
import plMarketProductFields from './markets/pl';

const marketCategoriesData = {
  [MarketEnum.en]: enMarketProductFields,
  [MarketEnum.pl]: plMarketProductFields
};

const transformField = (fieldName: string, fieldValue: string, productFields: ProductFieldPerMarketInterface[]): ProductFieldDataInterface => {
  const transformValue = productFields.find(data => data.fieldName === fieldName);
  return {
    displayName: transformValue ? transformValue.displayName : fieldName,
    value: transformValue?.valueTranslator ? transformValue.valueTranslator(fieldValue) : fieldValue
  };
}

export const getProductPerMarket = (product: ProductInterface, market: MarketEnum): ProductToDisplayInterface => {
  const productFields = marketCategoriesData[market] || enMarketProductFields;
  const { id, imgUrl, name, price, producer, guarantee,
    state,
    status,
    locations,
    soldAmount,
    category,
    subcategory,
    ratingData,
    ...restParams
  } = product;
  const baseProduct = {
    id,
    imgUrl,
    name,
    price,
    status,
    locations,
    soldAmount,
    category,
    subcategory,
    ratingData
  };

  let additionalFields = {};
  for (const field in restParams) {
    const transformedField = transformField(field, restParams[field], productFields);
    additionalFields = {...additionalFields, [`${field}`]: transformedField};
  }

  return {
    ...baseProduct,
    producer: transformField('producer', producer, productFields),
    guarantee: transformField('guarantee', guarantee, productFields),
    state: transformField('state', state, productFields),
    additionalFields
  };
};
