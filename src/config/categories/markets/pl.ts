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
    displayName: 'Elektronika',
    subcategories: [
      {
        name: ElectronicsSubcategoriesEnum.pc,
        displayName: 'Komputery'
      },
      {
        name: ElectronicsSubcategoriesEnum.laptops,
        displayName: 'Latpopy/Notebooki/Ultrabooki'
      },
      {
        name: ElectronicsSubcategoriesEnum.smartphones,
        displayName: 'Smartfony'
      },
    ]
  },
  {
    name: CategoriesEnum.accessories,
    displayName: 'Akcesoria',
    subcategories: [
      {
        name: AccessoriesSubcategoriesEnum.bags,
        displayName: 'Torby/Plecaki'
      },
      {
        name: AccessoriesSubcategoriesEnum.keyboards,
        displayName: 'Klawiatury'
      },
      {
        name: AccessoriesSubcategoriesEnum.monitors,
        displayName: 'Monitory'
      },
      {
        name: AccessoriesSubcategoriesEnum.memory,
        displayName: 'Pamięć zewnętrzna'
      },
    ]
  },
  {
    name: CategoriesEnum.games,
    displayName: 'Gaming',
    subcategories: [
      {
        name: GamesSubcategoriesEnum.pc,
        displayName: 'gry na pc'
      },
      {
        name: GamesSubcategoriesEnum.xbox,
        displayName: 'gry na xboxa'
      },
      {
        name: GamesSubcategoriesEnum.playStation,
        displayName: 'gry na play station'
      },
    ]
  }
]

export default categoriesConfig;
