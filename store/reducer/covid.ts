import { CovidAction } from './../type/action';
import { DataCovidLoading } from './../../interface/covid';
import * as type from '../type/covid';

const initialState: DataCovidLoading = {
  loading: false,
  data: [],
  err: null
}

export const covidReducer = (state: DataCovidLoading = initialState, action: CovidAction) => {
  switch (action.type) {
    case type.FETCH_VN_COVID:
      return {
        ...state,
        loading: true
      }
    case type.FETCH_VN_COVID_SUCCESS:
      return {
        ...action.payload
      }
    default:
      return state;
  }
}