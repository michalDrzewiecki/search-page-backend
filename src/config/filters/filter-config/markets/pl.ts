import { CategoriesEnum, FilterElementTypeEnum, GameVersionEnum } from '../../../../enums';
import { AccessoriesSubcategoriesEnum, ElectronicsSubcategoriesEnum } from '../../../../enums/subcategories';
import { FilterConfigInterface } from '../../interfaces';

const filterConfigs: FilterConfigInterface[] = [
  {
    resource: CategoriesEnum.games,
    filters: [
      {
        type: FilterElementTypeEnum.checkbox,
        title: 'Producent',
        filterElementName: 'producer',
        selectAllOption: true,
        isHidden: false
      },
      {
        type: FilterElementTypeEnum.radio,
        title: 'Wersja',
        filterElementName: 'version',
        options: [
          {
            displayName: 'Cyfrowa',
            value: GameVersionEnum.digital
          },
          {
            displayName: 'Pudełkowa',
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
            title: 'Producent',
            filterElementName: 'producer',
            selectAllOption: true,
            isHidden: false
          },
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'Kolor',
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
            title: 'Producent',
            filterElementName: 'producer',
            selectAllOption: true,
            isHidden: false
          },
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'Typ ekranu',
            filterElementName: 'screenType',
            isHidden: false
          },
        ]
      },
      {
        resource: AccessoriesSubcategoriesEnum.memory,
        filters: [
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'Producent',
            filterElementName: 'producer',
            selectAllOption: true,
            isHidden: false
          },
          {
            type: FilterElementTypeEnum.range,
            title: 'Pamięć RAM',
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
            title: 'Producent',
            filterElementName: 'producer',
            selectAllOption: true,
            isHidden: false
          },
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'Przeznaczenie',
            options: [
              {
                displayName: 'Gaming',
                value: 'gaming'
              },
              {
                displayName: 'Praca',
                value: 'work'
              },
              {
                displayName: 'Codzienny użytek',
                value: 'home'
              }
            ],
            filterElementName: 'purpose',
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
        type: FilterElementTypeEnum.checkbox,
        title: 'Producent',
        filterElementName: 'producer',
        selectAllOption: true,
        isHidden: false
      },
      {
        type: FilterElementTypeEnum.range,
        title: 'Pamięć RAM',
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
            title: 'Producent',
            filterElementName: 'producer',
            selectAllOption: true,
            isHidden: false
          },
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'Procesor',
            filterElementName: 'processor',
            isHidden: true
          },
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'System operacyjny',
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
            title: 'Producent',
            filterElementName: 'producer',
            selectAllOption: true,
            isHidden: false
          },
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'Procesor',
            filterElementName: 'processor',
            isHidden: true
          },
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'System operacyjny',
            filterElementName: 'system',
            isHidden: false
          },
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'Aparat',
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
            title: 'Producent',
            filterElementName: 'producer',
            selectAllOption: true,
            isHidden: false
          },
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'Procesor',
            filterElementName: 'processor',
            isHidden: true
          },
          {
            type: FilterElementTypeEnum.checkbox,
            title: 'System operacyjny',
            filterElementName: 'system',
            isHidden: false
          },
          {
            type: FilterElementTypeEnum.range,
            title: 'Bateria',
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
