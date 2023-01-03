import { GameRestrictionAgeEnum, GameVersionEnum, GuaranteeEnum, StateEnum } from '../../../enums';
import { ProductFieldPerMarketInterface } from '../interfaces';

const productsFieldConfig: ProductFieldPerMarketInterface[] = [
  {
    fieldName: 'producer',
    displayName: 'Producent'
  },
  {
    fieldName: 'guarantee',
    displayName: 'Okres trwania gwarancji',
    valueTranslator: (value: string) => {
      const translations = {
        [GuaranteeEnum.months6]: '6 miesięcy',
        [GuaranteeEnum.month12]: '1 rok',
        [GuaranteeEnum.month24]: '2 lata',
        [GuaranteeEnum.month36]: '3 lata'
      };
      return translations[value] || value;
    }
  },
  {
    fieldName: 'state',
    displayName: 'Stan',
    valueTranslator: (value: string) => {
      const translations = {
        [StateEnum.new]: 'Nowe',
        [StateEnum.used]: 'Uzywane'
      };
      return translations[value] || value;
    }
  },
  {
    fieldName: 'color',
    displayName: 'Kolor',
    valueTranslator: (value: string) => {
      const translations = {
        'black': 'Czarny',
        'white': 'Biały',
        'green': 'Zielony',
        'grey': 'Szary'
      };
      return translations[value] || value;
    }
  },
  {
    fieldName: 'purpose',
    displayName: 'Przeznaczenie',
    valueTranslator: (value: string) => {
      const translations = {
        'gaming': 'Gaming',
        'work': 'Do pracy',
        'home': 'Domowy użytek'
      };
      return translations[value] || value;
    }
  },
  {
    fieldName: 'amount',
    displayName: 'Ilość'
  },
  {
    fieldName: 'screenType',
    displayName: 'Typ ekranu'
  },
  {
    fieldName: 'ramMemory',
    displayName: 'Ilość pamięci RAM'
  },
  {
    fieldName: 'processor',
    displayName: 'Procesor'
  },
  {
    fieldName: 'system',
    displayName: 'System'
  },
  {
    fieldName: 'batteryPower',
    displayName: 'Moc baterii'
  },
  {
    fieldName: 'camera',
    displayName: 'Aparat'
  },
  {
    fieldName: 'version',
    displayName: 'Wersja',
    valueTranslator: (value: string) => {
      const translations = {
        [GameVersionEnum.standard]: 'Pudełkowa',
        [GameVersionEnum.digital]: 'Cyfrowa'
      };
      return translations[value] || value;
    }
  },
  {
    fieldName: 'restrictionAge',
    displayName: 'Ograniczenie wiekowe',
    valueTranslator: (value: string) => {
      const translations = {
        [GameRestrictionAgeEnum.years3]: '3+',
        [GameRestrictionAgeEnum.years12]: '12+',
        [GameRestrictionAgeEnum.years16]: '16+',
        [GameRestrictionAgeEnum.years18]: 'Tylko dla dorosłych'
      };
      return translations[value] || value;
    }
  }
];

export default productsFieldConfig;
