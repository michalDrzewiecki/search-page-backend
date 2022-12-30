import { FilterElementTypeEnum } from '../../../../enums';
import { FilterElementType } from '../../types';

const baseFilterConfig: FilterElementType[] = [
  {
    type: FilterElementTypeEnum.range,
    title: 'Cena',
    filterElementName: 'price.current',
    firstUnit: 'zł',
    secondUnit: 'zł',
    firstText: 'od',
    secondText: 'do',
    validation: {
      minValue: 0,
      isInteger: false
    },
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.select,
    title: 'Gwarancja',
    filterElementName: 'guarantee',
    options: [
      {
        displayName: '6 miesięcy',
        value: 'months6'
      },
      {
        displayName: '12 miesięcy',
        value: 'months12'
      },
      {
        displayName: '24 miesięcy',
        value: 'months24'
      },
      {
        displayName: '36 miesięcy',
        value: 'months36'
      }
    ],
    defaultOption: 'Wybierz długość gwarancji',
    details: 'Okres trwania gwaracnji zapewniony przez producenta',
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.radio,
    title: 'Stan',
    filterElementName: 'state',
    options: [
      {
        displayName: 'Nowy',
        value: 'new'
      },
      {
        displayName: 'Używany',
        value: 'used'
      }
    ],
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.checkbox,
    title: 'Status',
    filterElementName: 'status',
    options: [
      {
        displayName: 'Promocja',
        value: 'specialOffer'
      },
      {
        displayName: 'Nowe',
        value: 'new'
      },
      {
        displayName: 'Polecane',
        value: 'recommended'
      },
      {
        displayName: 'Ostatnie',
        value: 'last'
      }
    ],
    selectAllOption: true,
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.select,
    title: 'Dostępność',
    filterElementName: 'locations',
    defaultOption: 'Wybierz lokację',
    isHidden: false
  },
];

export default baseFilterConfig;
