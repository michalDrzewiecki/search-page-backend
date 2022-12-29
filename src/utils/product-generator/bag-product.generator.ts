import { CategoriesEnum } from '../../enums';
import { AccessoriesSubcategoriesEnum } from '../../enums/subcategories';
import { BagProductInterface } from '../../interfaces/product/accessories';
import { SubcategoryType } from '../../types/subcategory.type';
import { ProductGenerator } from './product.generator';

export class BagProductGenerator extends ProductGenerator {
  protected readonly category: CategoriesEnum = CategoriesEnum.accessories;
  protected readonly subcategory: SubcategoryType = AccessoriesSubcategoriesEnum.bags;
  protected readonly imageUrls: string[] = [
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/3/pr_2022_3_24_15_41_26_804_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/2/pr_2022_2_17_10_56_54_112_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/11/pr_2020_11_19_12_21_0_317_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/4/pr_2019_4_2_12_13_56_259_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/2/pr_2020_2_25_13_0_55_763_03.jpg'
  ];
  protected readonly producers: string[] = ['Reserved', 'Cat', 'Lenovo', 'CCC'];

  public generate(): BagProductInterface {
    const product = super.generate();
    return {
      ...product,
      color: this.getColor()
    }
  }

  private getColor(): string {
    const availableColors = ['black', 'white', 'green', 'grey'];
    const index = this.rand(0, availableColors.length - 1);
    return availableColors[index];
  }
}
