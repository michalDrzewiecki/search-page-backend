import { GamesSubcategoriesEnum } from '../../enums/subcategories';
import { SubcategoryType } from '../../types/subcategory.type';
import { GameGenerator } from './game.generator';

export class PlayStationGameGenerator extends GameGenerator {
  protected readonly subcategory: SubcategoryType = GamesSubcategoriesEnum.playStation;
}
