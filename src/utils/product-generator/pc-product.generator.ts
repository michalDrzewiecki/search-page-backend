import { ElectronicsSubcategoriesEnum } from '../../enums/subcategories';
import { SubcategoryType } from '../../types/subcategory.type';
import { ElectronicsProductGenerator } from './electronics-product.generator';

export class PcProductGenerator extends ElectronicsProductGenerator {
  protected readonly subcategory: SubcategoryType = ElectronicsSubcategoriesEnum.pc;
  protected readonly imageUrls: string[] = [
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/11/pr_2021_11_16_10_15_5_751_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/12/pr_2022_12_8_16_8_34_304_02.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_2_12_8_13_628_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/12/pr_2022_12_8_16_11_55_140_02.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/2/pr_2022_2_25_10_13_39_674_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/4/pr_2021_4_21_13_51_38_38_02.jpg'
  ];
  protected readonly producers: string[] = ['HP', 'Dell', 'Acer', 'ASUS', 'Lenovo', 'Apple', 'MSI'];
  protected systems: string[] = ['Linux', 'Kali Linux', 'Windows 10', 'Windows XP', 'Mac OS'];

}
