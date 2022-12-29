import { SortValuesEnum } from '../../../enums';
import { SortOptionInterface } from '../interfaces';

const sortConfig: SortOptionInterface[] = [
  {
    name: 'Wybierz sposób sortowania',
    sortField: '',
    sortValue: SortValuesEnum.descending
  },
  {
    name: 'Od najpopularniejszych',
    sortField: 'soldAmount',
    sortValue: SortValuesEnum.descending
  },
  {
    name: 'Cena: od najtańszych',
    sortField: 'price.current',
    sortValue: SortValuesEnum.ascending
  },
  {
    name: 'Cena: od najdroższych',
    sortField: 'price.current',
    sortValue: SortValuesEnum.descending
  }
];

export default sortConfig;
