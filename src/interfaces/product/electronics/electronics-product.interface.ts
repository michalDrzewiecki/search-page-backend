import { ProductInterface } from '../product.interface';

export interface ElectronicsProductInterface extends ProductInterface {
  processor: string;
  ramMemory: number;
  system: string;
}
