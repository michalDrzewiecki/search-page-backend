import { ElectronicsSubcategoriesEnum } from '../../enums/subcategories';
import { LaptopProductInterface } from '../../interfaces/product/electronics';
import { SubcategoryType } from '../../types/subcategory.type';
import { ElectronicsProductGenerator } from './electronics-product.generator';

export class LaptopProductGenerator extends ElectronicsProductGenerator {
  protected readonly subcategory: SubcategoryType = ElectronicsSubcategoriesEnum.laptops;
  protected readonly imageUrls: string[] = [
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/8/pr_2022_8_25_12_51_23_154_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_7_10_5_10_593_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_10_12_13_37_753_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/9/pr_2021_9_27_9_58_42_429_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/11/pr_2021_11_27_11_26_45_11_01.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/12/pr_2021_12_4_18_4_57_218_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/6/pr_2022_6_6_22_35_37_634_06.jpg'
  ];
  protected readonly producers: string[] = ['HP', 'Dell', 'Acer', 'ASUS', 'Lenovo', 'Apple', 'MSI'];
  protected systems: string[] = ['Linux', 'Kali Linux', 'Windows 10', 'Windows XP', 'Mac OS'];

  public generate(): LaptopProductInterface {
    const product = super.generate();
    return {
      ...product,
      batteryPower: this.getBatteryPower()
    }
  }

  private getBatteryPower(): number {
    const availableBatteryPowers = [2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200];
    const index = this.rand(0, availableBatteryPowers.length - 1);
    return availableBatteryPowers[index];
  }
}
