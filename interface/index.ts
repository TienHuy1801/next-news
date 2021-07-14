import { DataCovidLoading } from './covid';
import { DataLoading } from './news';
export interface DataRedux {
  news: DataLoading,
  covid: DataCovidLoading
}