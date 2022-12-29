import { ElectronicsProductInterface } from './electronics-product.interface';

export interface LaptopProductInterface extends ElectronicsProductInterface {
  batteryPower: number;
}
