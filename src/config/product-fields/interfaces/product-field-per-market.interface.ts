export interface ProductFieldPerMarketInterface {
  fieldName: string;
  displayName: string;
  valueTranslator?: (value: string) => string;
}
