import { CategoriesEnum } from '../../../enums';
import {
  AccessoriesSubcategoriesEnum,
  ElectronicsSubcategoriesEnum,
  GamesSubcategoriesEnum
} from '../../../enums/subcategories';
import { CategoryInterface } from '../../../interfaces/category.interface';

const categoriesConfig: CategoryInterface[] = [
  {
    name: CategoriesEnum.electronics,
    displayName: 'Electronics',
    subcategories: [
      {
        name: ElectronicsSubcategoriesEnum.pc,
        displayName: 'Personal computers'
      },
      {
        name: ElectronicsSubcategoriesEnum.laptops,
        displayName: 'Laptops/Notebooks/Ultrabooks'
      },
      {
        name: ElectronicsSubcategoriesEnum.smartphones,
        displayName: 'Smartphones'
      },
    ]
  },
  {
    name: CategoriesEnum.accessories,
    displayName: 'Accessories',
    subcategories: [
      {
        name: AccessoriesSubcategoriesEnum.bags,
        displayName: 'Bags'
      },
      {
        name: AccessoriesSubcategoriesEnum.keyboards,
        displayName: 'Keyboards'
      },
      {
        name: AccessoriesSubcategoriesEnum.monitors,
        displayName: 'Monitors'
      },
      {
        name: AccessoriesSubcategoriesEnum.memory,
        displayName: 'Memory'
      },
    ]
  },
  {
    name: CategoriesEnum.games,
    displayName: 'Games',
    subcategories: [
      {
        name: GamesSubcategoriesEnum.pc,
        displayName: 'pc games'
      },
      {
        name: GamesSubcategoriesEnum.xbox,
        displayName: 'xbox games'
      },
      {
        name: GamesSubcategoriesEnum.playStation,
        displayName: 'play station games'
      },
    ]
  }
]

export default categoriesConfig;
