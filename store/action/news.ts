import { DataLoading } from './../../interface/news';
import { FETCH_COVID_SUCCESS, FETCH_DATA, FETCH_DATA_COVID, FETCH_FAIL, FETCH_SUCCESS } from './../type/news';

const fetchData = (id: string) => ({
  type: FETCH_DATA,
  payload: id
})

const fetchDataCovid = (id: string) => ({
  type: FETCH_DATA_COVID,
  payload: id
})

const fetchSuccess = (data: DataLoading) => ({
  type: FETCH_SUCCESS,
  payload: data
})

const fetchCovidSuccess = (data: DataLoading) => ({
  type: FETCH_COVID_SUCCESS,
  payload: data
})

const fetchFail = (err: any) => ({
  type: FETCH_FAIL,
  payload: err
})

export const newsAction = {
  fetchData,
  fetchSuccess,
  fetchFail,
  fetchDataCovid,
  fetchCovidSuccess
}