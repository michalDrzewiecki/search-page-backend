export interface CategoryInterface {
  name: string;
  displayName: string;
  count?: number;
  subcategories: {
    name: string;
    displayName: string;
    count?: number;
  }[];
}
