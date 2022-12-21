import { CurrencyEnum, GuaranteeEnum, StateEnum, StatusEnum } from '../enums';
import { ProductInterface } from '../interfaces';
import { PriceInterface } from '../interfaces/price.interface';

export class ProductGenerator {

  constructor(
    private readonly amount: number
  ) {
  }

  public generate(): ProductInterface[] {
    const products: ProductInterface[] = [];
    for (let i = 0; i < this.amount; i++) {
      const price = this.getPrize();
      products.push({
        id: i.toString(),
        imgUrl: this.getImageUrl(),
        name: this.getName(35),
        price,
        ramAmount: this.getRamAmount(),
        producer: this.getProducer(),
        guarantee: this.getGuarantee(),
        state: this.getState(),
        status: this.getStatus(price),
        locations: this.getLocations(),
      })
    }
    return products;
  }

  private getImageUrl(): string {
    const availableImages = [
      'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/8/pr_2022_8_25_12_51_23_154_00.jpg',
      'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_7_10_5_10_593_00.jpg',
      'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_10_12_13_37_753_00.jpg',
      'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/9/pr_2021_9_27_9_58_42_429_00.jpg',
      'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/11/pr_2021_11_27_11_26_45_11_01.jpg',
      'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/12/pr_2021_12_4_18_4_57_218_00.jpg',
      'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/6/pr_2022_6_6_22_35_37_634_06.jpg'
    ];
    const index = this.rand(0, availableImages.length - 1);
    return availableImages[index];
  }

  private getName(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789- ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(this.rand(0, charactersLength));
    }
    return result;
  }

  private getPrize(): PriceInterface {
    const isPromotion = this.rand(0, 10) > 7;
    const current = this.rand(499, 49999);
    return {
      current,
      currency: CurrencyEnum.pln,
      previous: isPromotion ? this.rand(current + 10, 49999 + 10) : 0
    };
  }

  private getRamAmount(): number {
    const availableRamAmount = [1, 2, 4, 8, 16, 32, 64, 128];
    const index = this.rand(0, availableRamAmount.length - 1);
    return availableRamAmount[index];
  }

  private getProducer(): string {
    const availableProducers = ['HP', 'Dell', 'Acer', 'ASUS', 'Lenovo', 'Apple', 'MSI'];
    const index = this.rand(0, availableProducers.length - 1);
    return availableProducers[index];
  }

  private getGuarantee(): GuaranteeEnum {
    const availableGuarantees = Object.keys(GuaranteeEnum);
    const index = this.rand(0, availableGuarantees.length - 1);
    return GuaranteeEnum[availableGuarantees[index]];
  }

  private getState(): StateEnum {
    const availableStates = Object.keys(StateEnum);
    const index = this.rand(0, availableStates.length - 1);
    return StateEnum[availableStates[index]];
  }

  private getStatus(prize: PriceInterface): StatusEnum[] {
    const availableStatuses = Object.keys(StatusEnum);
    const statuses = new Set<StatusEnum>([]);
    for (const availableStatus of availableStatuses) {
      const result = this.rand(0, 1);
      if (result) {
        statuses.add(StatusEnum[availableStatus]);
      }
    }
    if (prize.previous) {
      statuses.add(StatusEnum.specialOffer);
    } else {
      return Array.from(statuses).filter(status => status !== StatusEnum.specialOffer);
    }
    return Array.from(statuses);

  }

  private getLocations(): string[] {
    const availableLocations = ['Gdańsk', 'Kraków', 'Łódź', 'Wrocław'];
    const locations: string[] = [];
    for (const availableLocation of availableLocations) {
      const result = this.rand(0, 1);
      if (result) {
        locations.push(availableLocation);
      }
    }
    if (!locations.length) {
      const index = this.rand(0, availableLocations.length - 1);
      locations.push(availableLocations[index]);
    }
    return locations;
  }

  private rand(minValue: number, maxValue: number): number {
    return Math.round(Math.random() * maxValue) + minValue;
  }
}
