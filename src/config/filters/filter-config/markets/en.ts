import { CategoriesEnum, FilterElementTypeEnum, GameVersionEnum } from '../../../../enums';
import { AccessoriesSubcategoriesEnum, ElectronicsSubcategoriesEnum } from '../../../../enums/subcategories';
import { FilterConfigInterface } from '../../interfaces';

const filterConfigs: FilterConfigInterface[] = [
  {
    resource: CategoriesEnum.games,
    filters: [
      {
        type: FilterElementTypeEnum.radio,
        title: 'Version',
        filterElementName: 'version',
        options: [
          {
            displayName: 'Digital',
            value: GameVersionEnum.digital
          },
          {
            displayName: 'Standard',
            value: GameVersionEnum.standard
          }
        ],
        isHidden: false
      },
    ],
    subResources: []
  },
  {
    resource: CategoriesEnum.accessories,
    filters: [],
    subResources: [
      {
        resource: AccessoriesSubcategoriesEnum.bags,
        filters: [
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'Color',
            filterElementName: 'color',
            isHidden: false
          },
        ]
      },
      {
        resource: AccessoriesSubcategoriesEnum.monitors,
        filters: [
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'Screen type',
            filterElementName: 'screenType',
            isHidden: false
          },
        ]
      },
      {
        resource: AccessoriesSubcategoriesEnum.memory,
        filters: [
          {
            type: FilterElementTypeEnum.range,
            title: 'Memory amount',
            filterElementName: 'memory',
            firstUnit: 'GB',
            secondUnit: 'GB',
            firstText: 'from',
            secondText: 'to',
            validation: {
              minValue: 0,
              isInteger: true
            },
            isHidden: false
          },
        ]
      },
      {
        resource: AccessoriesSubcategoriesEnum.keyboards,
        filters: [
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'Purpose',
            filterElementName: 'purpose',
            options: [
              {
                displayName: 'Gaming',
                value: 'gaming'
              },
              {
                displayName: 'Work',
                value: 'work'
              },
              {
                displayName: 'Home',
                value: 'home'
              }
            ],
            isHidden: false
          },
        ]
      }
    ]
  },
  {
    resource: CategoriesEnum.electronics,
    filters: [
      {
        type: FilterElementTypeEnum.range,
        title: 'RAM',
        filterElementName: 'ramAmount',
        firstUnit: 'GB',
        secondUnit: 'GB',
        firstText: '4',
        secondText: '128',
        validation: {
          maxValue: 128,
          minValue: 1,
          isInteger: true
        },
        isHidden: false
      },
    ],
    subResources: [
      {
        resource: ElectronicsSubcategoriesEnum.pc,
        filters: [
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'Processor',
            filterElementName: 'processor',
            isHidden: true
          },
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'System',
            filterElementName: 'system',
            isHidden: false
          },
        ]
      },
      {
        resource: ElectronicsSubcategoriesEnum.smartphones,
        filters: [
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'Processor',
            filterElementName: 'processor',
            isHidden: true
          },
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'System',
            filterElementName: 'system',
            isHidden: false
          },
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'Camera',
            filterElementName: 'camera',
            isHidden: false
          },
        ]
      },
      {
        resource: ElectronicsSubcategoriesEnum.laptops,
        filters: [
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'Processor',
            filterElementName: 'processor',
            isHidden: true
          },
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'System',
            filterElementName: 'system',
            isHidden: false
          },
          {
            type: FilterElementTypeEnum.range,
            title: 'Battery',
            filterElementName: 'batteryPower',
            firstUnit: 'mAh',
            secondUnit: 'mAh',
            firstText: '2000',
            secondText: '3200',
            validation: {
              minValue: 1000,
              isInteger: true
            },
            isHidden: false
          },
        ]
      },
    ]
  },
];

export default filterConfigs;
