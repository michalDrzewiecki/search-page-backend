import { CategoriesEnum } from '../../enums';
import { AccessoriesSubcategoriesEnum } from '../../enums/subcategories';
import { KeyboardProductInterface } from '../../interfaces/product/accessories';
import { SubcategoryType } from '../../types/subcategory.type';
import { ProductGenerator } from './product.generator';

export class KeyboardProductGenerator extends ProductGenerator {
  protected readonly category: CategoriesEnum = CategoriesEnum.accessories;
  protected readonly subcategory: SubcategoryType = AccessoriesSubcategoriesEnum.keyboards;
  protected readonly imageUrls: string[] = [
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/7/pr_2020_7_2_11_27_43_584_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/10/pr_2020_10_16_11_32_44_391_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/12/pr_2019_12_9_15_57_17_135_06.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/12/pr_2020_12_2_8_43_17_203_00.jpg'
  ];
  protected readonly producers: string[] = ['SuperKeyboards', 'GamerShop', 'Gaming'];

  public generate(): KeyboardProductInterface {
    const product = super.generate();
    return {
      ...product,
      purpose: this.getPurpose()
    }
  }

  private getPurpose(): string {
    const availablePurposes = ['gaming', 'work', 'home'];
    const index = this.rand(0, availablePurposes.length - 1);
    return availablePurposes[index];
  }
}
