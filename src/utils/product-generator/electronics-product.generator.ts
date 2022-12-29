import { CategoriesEnum } from '../../enums';
import { ElectronicsProductInterface } from '../../interfaces/product/electronics';
import { ProductGenerator } from './product.generator';

export abstract class ElectronicsProductGenerator extends ProductGenerator {
  protected abstract systems: string[];
  protected readonly category: CategoriesEnum = CategoriesEnum.electronics;

  public generate(): ElectronicsProductInterface {
    const product = super.generate();
    return {
      ...product,
      processor: this.getProcessor(),
      ramMemory: this.getRamAmount(),
      system: this.getSystem()
    }
  }

  private getSystem(): string {
    const index = this.rand(0, this.systems.length - 1);
    return this.systems[index];
  }

  private getRamAmount(): number {
    const availableRamAmount = [1, 2, 4, 8, 16, 32, 64, 128];
    const index = this.rand(0, availableRamAmount.length - 1);
    return availableRamAmount[index];
  }

  private getProcessor(): string {
    const availableProcessors = [
      'Intel Core i3',
      'Intel Core i5',
      'Intel Core i7',
      'Intel Pentium'
    ];
    const index = this.rand(0, availableProcessors.length - 1);
    return availableProcessors[index];
  }
}
