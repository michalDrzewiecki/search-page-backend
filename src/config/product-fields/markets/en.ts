import { GameRestrictionAgeEnum, GameVersionEnum, GuaranteeEnum, StateEnum } from '../../../enums';
import { ProductFieldPerMarketInterface } from '../interfaces';

const productsFieldConfig: ProductFieldPerMarketInterface[] = [
  {
    fieldName: 'producer',
    displayName: 'Producer'
  },
  {
    fieldName: 'guarantee',
    displayName: 'Warranty period',
    valueTranslator: (value: string) => {
      const translations = {
        [GuaranteeEnum.months6]: '6 months',
        [GuaranteeEnum.month12]: '1 year',
        [GuaranteeEnum.month24]: '2 years',
        [GuaranteeEnum.month36]: '3 years'
      };
      return translations[value] || value;
    }
  },
  {
    fieldName: 'state',
    displayName: 'State',
    valueTranslator: (value: string) => {
      const translations = {
        [StateEnum.new]: 'New',
        [StateEnum.used]: 'Used'
      };
      return translations[value] || value;
    }
  },
  {
    fieldName: 'color',
    displayName: 'Color'
  },
  {
    fieldName: 'purpose',
    displayName: 'Purpose'
  },
  {
    fieldName: 'amount',
    displayName: 'Amount'
  },
  {
    fieldName: 'screenType',
    displayName: 'Screen Type'
  },
  {
    fieldName: 'ramMemory',
    displayName: 'RAM memory amount'
  },
  {
    fieldName: 'processor',
    displayName: 'Processor'
  },
  {
    fieldName: 'system',
    displayName: 'System'
  },
  {
    fieldName: 'batteryPower',
    displayName: 'Battery power'
  },
  {
    fieldName: 'camera',
    displayName: 'Camera'
  },
  {
    fieldName: 'version',
    displayName: 'Version',
    valueTranslator: (value: string) => {
      const translations = {
        [GameVersionEnum.standard]: 'Standard',
        [GameVersionEnum.digital]: 'Digital'
      };
      return translations[value] || value;
    }
  },
  {
    fieldName: 'restrictionAge',
    displayName: 'Age restriction',
    valueTranslator: (value: string) => {
      const translations = {
        [GameRestrictionAgeEnum.years3]: '3+',
        [GameRestrictionAgeEnum.years12]: '12+',
        [GameRestrictionAgeEnum.years16]: '16+',
        [GameRestrictionAgeEnum.years18]: 'Adults only'
      };
      return translations[value] || value;
    }
  }
];

export default productsFieldConfig;
