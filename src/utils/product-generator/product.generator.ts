import { CategoriesEnum, CurrencyEnum, GuaranteeEnum, StateEnum, StatusEnum } from '../../enums';
import { PriceInterface } from '../../interfaces';
import { ProductInterface, RatingInterface } from '../../interfaces/product';
import { SubcategoryType } from '../../types/subcategory.type';

export abstract class ProductGenerator {
  protected readonly category: CategoriesEnum;
  protected readonly subcategory: SubcategoryType;
  protected readonly imageUrls: string[];
  protected readonly producers: string[];

  protected product: ProductInterface;

  constructor(
    private readonly id: string
  ) {
  }

  public generate(): ProductInterface {
    const price = this.getPrice();
    return {
      id: this.id,
      imgUrl: this.getImageUrl(),
      name: this.getName(50),
      price,
      producer: this.getProducer(),
      guarantee: this.getGuarantee(),
      state: this.getState(),
      status: this.getStatus(price),
      locations: this.getLocations(),
      soldAmount: this.getSoldAmount(),
      category: this.category,
      subcategory: this.subcategory,
      ratingData: this.getRating()
    }
  }

  private getImageUrl(): string {
    const index = this.rand(0, this.imageUrls.length - 1);
    return this.imageUrls[index];
  }

  private getName(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(this.rand(0, charactersLength));
    }
    return result;
  }

  private getPrice(): PriceInterface {
    const isPromotion = this.rand(0, 10) > 7;
    const current = this.rand(499, 49999);
    return {
      current,
      currency: CurrencyEnum.pln,
      previous: isPromotion ? this.rand(current + 10, 49999 + 10) : 0
    };
  }



  private getProducer(): string {
    const index = this.rand(0, this.producers.length - 1);
    return this.producers[index];
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
    if (+this.id % 100 === 0) {
      return [];
    }
    const availableLocations = ['Gdańsk', 'Kraków', 'Łódź', 'Wrocław'];
    const locations: string[] = [];
    for (const availableLocation of availableLocations) {
      const result = this.rand(0, 1);
      if (result) {
        locations.push(availableLocation);
      }
    }
    return locations;
  }

  private getSoldAmount(): number {
    return this.rand(0, 10000);
  }

  private getRating(): RatingInterface {
    const maxRating = 6;
    const rating = this.rand(0, maxRating);
    return {
      maxRating,
      rating
    };
  }

  protected rand(minValue: number, maxValue: number): number {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
  }
}
