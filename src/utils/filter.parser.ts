import { FilterOperatorEnum } from '../enums';
import { SingleFilterInterface } from '../interfaces';

export class FilterParser {
  constructor(
    private readonly filterData: string
  ) {
  }

  public getFilterData(): SingleFilterInterface[] {
    const {filterData} = this;
    if (!filterData || !filterData.length) {
      return [];
    }
    const parsedFilters: SingleFilterInterface[] = [];
    filterData.split(':')
      .forEach(fieldFilter => parsedFilters.push(this.parseSingleFieldFilter(fieldFilter)));
    return parsedFilters.filter(parsedFilter => !!parsedFilter);
  }

  private parseSingleFieldFilter(fieldFilter: string): SingleFilterInterface {
    try {
      const [field, operator, values] = fieldFilter.split('$');
      return {
        field,
        operator: operator as FilterOperatorEnum,
        values: values.split(',') as string[]
      }
    } catch (e) {
      return null;
    }
  }
}
