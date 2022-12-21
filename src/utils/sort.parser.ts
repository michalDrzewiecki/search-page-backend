import { SortDataInterface } from '../interfaces';

export class SortParser {
  constructor(
    private readonly sortData: string
  ) {
  }

  public getSortData(): SortDataInterface | null {
    const {sortData} = this;
    if (!sortData) {
      return null;
    }
    const [field, value] = sortData.split(':');
    return {
      field,
      value: +value
    }
  }
}
