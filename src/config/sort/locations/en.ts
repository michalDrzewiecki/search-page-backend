import { SortValuesEnum } from '../../../enums';
import { SortOptionInterface } from '../interfaces';

const sortConfig: SortOptionInterface[] = [
  {
    name: 'Select sorting type',
    sortField: '',
    sortValue: SortValuesEnum.descending
  },
  {
    name: 'From most popular',
    sortField: 'soldAmount',
    sortValue: SortValuesEnum.descending
  },
  {
    name: 'Price: from the cheapest',
    sortField: 'price.current',
    sortValue: SortValuesEnum.ascending
  },
  {
    name: 'Price: from the most expensive',
    sortField: 'price.current',
    sortValue: SortValuesEnum.descending
  }
];

export default sortConfig;
