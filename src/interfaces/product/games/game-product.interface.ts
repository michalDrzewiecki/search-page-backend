import { GameRestrictionAgeEnum, GameVersionEnum } from '../../../enums';
import { ProductInterface } from '../product.interface';

export interface GameProductInterface extends ProductInterface {
  version: GameVersionEnum;
  restrictionAge: GameRestrictionAgeEnum;
}
