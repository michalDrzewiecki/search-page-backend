import { ElectronicsProductInterface } from './electronics-product.interface';

export interface SmartphoneProductInterface extends ElectronicsProductInterface {
  camera: string;
}
