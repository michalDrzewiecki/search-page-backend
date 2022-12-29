import { FilterElementTypeEnum } from '../../../../enums';
import { FilterElementType } from '../../types';

const baseFilterConfig: FilterElementType[] = [
  {
    type: FilterElementTypeEnum.range,
    title: 'Price',
    filterElementName: 'price.current',
    firstUnit: 'zł',
    secondUnit: 'zł',
    firstText: 'from',
    secondText: 'to',
    validation: {
      minValue: 0,
      isInteger: false
    },
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.checkbox,
    title: 'Producer',
    filterElementName: 'producer',
    selectAllOption: true,
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.select,
    title: 'Guarantee',
    filterElementName: 'guarantee',
    defaultOption: 'Select warranty period',
    options: [
      {
        displayName: '6 months',
        value: 'months6'
      },
      {
        displayName: '12 months',
        value: 'months12'
      },
      {
        displayName: '24 months',
        value: 'months24'
      },
      {
        displayName: '36 months',
        value: 'months36'
      }
    ],
    details: 'Warranty period from producer',
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.radio,
    title: 'State',
    filterElementName: 'state',
    options: [
      {
        displayName: 'New',
        value: 'new'
      },
      {
        displayName: 'Used',
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
        displayName: 'Special Offer',
        value: 'specialOffer'
      },
      {
        displayName: 'New',
        value: 'new'
      },
      {
        displayName: 'Recommended',
        value: 'recommended'
      },
      {
        displayName: 'Lastly added',
        value: 'last'
      }
    ],
    selectAllOption: true,
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.select,
    title: 'Availability',
    filterElementName: 'locations',
    defaultOption: 'Select location',
    isHidden: false
  }
];

export default baseFilterConfig;
