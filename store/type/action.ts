import { DataNews, DataLoading } from './../../interface/news';
import { Action } from 'redux';

export interface NewsAction extends Action {
  type: string,
  payload?: DataLoading | string | any
}

export interface CovidAction extends Action {
  type: string,
  payload?: DataLoading | string | any
}