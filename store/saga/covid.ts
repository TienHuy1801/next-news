import { DataCovid } from './../../interface/covid';
import { FETCH_VN_COVID } from './../type/covid';
import { actions } from './../action/index';
import axios from 'axios';
import { call, put, takeLatest} from 'redux-saga/effects';
import { DataCovidLoading } from '../../interface/covid';

async function fetchData() {
  let dataId = window.localStorage.getItem('covidVN')
  if (dataId) {
    return JSON.parse(dataId);
  } 
  let response = await axios.get("https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST");
  window.localStorage.setItem('covidVN', JSON.stringify(response.data));
  return response.data;
}

function* fetch() {
  try {
    let data: DataCovid = yield call(fetchData);
    let dataLoading: DataCovidLoading = {
      data: data,
      loading: false,
      err: null
    }
    yield put(actions.covidAction.fetchVNCovidSuccess(dataLoading));
  } catch (e) {
    console.log(e);
    let dataError: DataCovidLoading = {
      data: [],
      loading: false,
      err: e
    }
    yield put(actions.covidAction.fetchVNCovidSuccess(dataError));
  }
}

export const rootCovidSaga = [
  takeLatest( FETCH_VN_COVID, fetch),
];
