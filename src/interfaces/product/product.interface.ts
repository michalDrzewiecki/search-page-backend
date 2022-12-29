import { CategoriesEnum, GuaranteeEnum, StateEnum, StatusEnum } from '../../enums';
import { ElectronicsSubcategoriesEnum } from '../../enums/subcategories';
import { SubcategoryType } from '../../types/subcategory.type';
import { PriceInterface } from '../price.interface';

export interface ProductInterface {
  id: string;
  imgUrl: string;
  name: string;
  price: PriceInterface;
  producer: string;
  guarantee: GuaranteeEnum;
  state: StateEnum;
  status: StatusEnum[];
  locations: string[];
  soldAmount: number;
  category: CategoriesEnum;
  subcategory: SubcategoryType;
}
