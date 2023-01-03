import { ElectronicsSubcategoriesEnum } from '../../enums/subcategories';
import { SmartphoneProductInterface } from '../../interfaces/product/electronics';
import { SubcategoryType } from '../../types/subcategory.type';
import { ElectronicsProductGenerator } from './electronics-product.generator';

export class SmartphoneProductGenerator extends ElectronicsProductGenerator {
  protected readonly subcategory: SubcategoryType = ElectronicsSubcategoriesEnum.smartphones;
  protected readonly imageUrls: string[] = [
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_22_22_25_18_614_08.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_8_9_2_28_148_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/7/pr_2022_7_7_15_39_40_549_01.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_22_22_6_58_326_08.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_18_12_16_11_980_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/8/pr_2022_8_29_10_59_43_268_00.jpg'
  ];
  protected readonly producers: string[] = ['Apple', 'Samsung', 'MyPhone', 'Xiaomi', 'Huawei'];
  protected systems: string[] = ['Android', 'iOS', 'Windows Phone'];

  public generate(): SmartphoneProductInterface {
    const product = super.generate();
    return {
      ...product,
      camera: this.getCamera()
    }
  }

  private getCamera(): string {
    const availableCameras = ['8mpx', '10mpx', '12mpx'];
    const index = this.rand(0, availableCameras.length - 1);
    return availableCameras[index];
  }
}
