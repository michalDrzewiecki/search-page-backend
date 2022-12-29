import { CategoriesEnum, GameRestrictionAgeEnum, GameVersionEnum } from '../../enums';
import { GameProductInterface } from '../../interfaces/product/games';
import { ProductGenerator } from './product.generator';

export abstract class GameGenerator extends ProductGenerator {
  protected readonly category: CategoriesEnum = CategoriesEnum.games;
  protected readonly imageUrls: string[] = [
    'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/7/pr_2022_7_21_13_49_41_19_00.jpg',
    'https://www.x-kom.pl/p/1100275-gra-na-playstation-4-playstation-diablo-iv.html',
    'https://www.x-kom.pl/p/693046-gra-na-xbox-series-x-s-xbox-grand-theft-auto-trilogy-the-definitive-edition.html'
  ];
  protected readonly producers: string[] = ['EA', 'Blizzard', 'PiranhaBytes'];

  public generate(): GameProductInterface {
    const product = super.generate();
    return {
      ...product,
      version: this.getVersion(),
      restrictionAge: this.getRestrictionAge()
    }
  }

  private getVersion(): GameVersionEnum {
    const availableGameVersions = Object.keys(GameVersionEnum);
    const index = this.rand(0, availableGameVersions.length - 1);
    return GameVersionEnum[availableGameVersions[index]];
  }

  private getRestrictionAge(): GameRestrictionAgeEnum {
    const availableGameRestrictionAges = Object.keys(GameRestrictionAgeEnum);
    const index = this.rand(0, availableGameRestrictionAges.length - 1);
    return GameRestrictionAgeEnum[availableGameRestrictionAges[index]];
  }
}
