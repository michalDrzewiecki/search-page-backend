import { CategoriesEnum } from '../../enums';
import { AccessoriesSubcategoriesEnum } from '../../enums/subcategories';
import { MonitorProductInterface } from '../../interfaces/product/accessories';
import { SubcategoryType } from '../../types/subcategory.type';
import { ProductGenerator } from './product.generator';

export class MonitorProductGenerator extends ProductGenerator {
  protected readonly category: CategoriesEnum = CategoriesEnum.accessories;
  protected readonly subcategory: SubcategoryType = AccessoriesSubcategoriesEnum.monitors;
  protected readonly imageUrls: string[] = [
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/2/pr_2020_2_6_8_36_59_192_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/10/pr_2021_10_15_10_36_42_870_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/12/pr_2022_12_2_8_54_42_854_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/9/pr_2020_9_2_11_10_57_978_00.jpg'
  ];
  protected readonly producers: string[] = ['SupaScreens', 'Samsung', 'LG', 'Philips'];

  public generate(): MonitorProductInterface {
    const product = super.generate();
    return {
      ...product,
      screenType: this.getScreenType()
    }
  }

  private getScreenType(): string {
    const availableScreenTypes = ['LCD', 'LED', 'OLED'];
    const index = this.rand(0, availableScreenTypes.length - 1);
    return availableScreenTypes[index];
  }
}
