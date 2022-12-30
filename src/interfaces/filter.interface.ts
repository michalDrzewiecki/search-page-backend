export interface FilterInterface {
  offset: number;
  limit: number;
  sort: string;
  filter: string
  search: string;
  category?: string;
  subcategory?: string;
}
