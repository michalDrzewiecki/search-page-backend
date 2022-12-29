import { CategoriesEnum } from '../../enums';
import { AccessoriesSubcategoriesEnum } from '../../enums/subcategories';
import { MemoryProductInterface } from '../../interfaces/product/accessories';
import { SubcategoryType } from '../../types/subcategory.type';
import { ProductGenerator } from './product.generator';

export class MemoryProductGenerator extends ProductGenerator {
  protected readonly category: CategoriesEnum = CategoriesEnum.accessories;
  protected readonly subcategory: SubcategoryType = AccessoriesSubcategoriesEnum.memory;
  protected readonly imageUrls: string[] = [
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/10/pr_2021_10_12_8_17_47_424_01.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/5/pr_2020_5_26_12_53_53_625_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/9/pr_2020_9_9_11_23_36_983_00.jpg',
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/7/pr_2020_7_15_14_13_10_257_03.jpg'
  ];
  protected readonly producers: string[] = ['GOODRAM', 'Memory&You'];

  public generate(): MemoryProductInterface {
    const product = super.generate();
    return {
      ...product,
      amount: this.getMemoryAmount()
    }
  }

  private getMemoryAmount(): number {
    const availableMemoryAmount = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
    const index = this.rand(0, availableMemoryAmount.length - 1);
    return availableMemoryAmount[index];
  }

}
