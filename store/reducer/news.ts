import { NewsAction } from '../type/action';
import { DataLoading } from './../../interface/news';
import * as type from '../type/news';

const initialState: DataLoading = {
  id: "",
  loading: false,
  data: [],
  err: null
}

export const newsReducer = (state: DataLoading = initialState, action: NewsAction) => {
  switch (action.type) {
    case type.FETCH_DATA:
      return {
        ...state,
        loading: true
      }
    case type.FETCH_DATA_COVID:
      return {
        ...state,
        loading: true
      }
    case type.FETCH_FAIL:
      return {
        ...state,
        loading: false,
        err: action.payload
      }
    case type.FETCH_SUCCESS:
      return {
        ...action.payload
      }
    case type.FETCH_COVID_SUCCESS:
      return {
        ...action.payload
      }
    default:
      return state;
  }
}