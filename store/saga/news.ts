import { actions } from './../action/index';
import { DataNews, DataLoading } from './../../interface/news';
import { FETCH_DATA, FETCH_DATA_COVID } from './../type/news';
import axios from 'axios';
import { call, put, takeLatest} from 'redux-saga/effects';

async function fetchData(id: string) {
  let dataId = window.localStorage.getItem(id)
  if (dataId) {
    return JSON.parse(dataId);
  } 
  let response = await axios.get("https://newsapi.org/v2/everything?q=" + id + "&from=2021-06-13&sortBy=publishedAt&apiKey=971ed83139ce4ce58b0bfa7a9f611c5d");
  window.localStorage.setItem(id, JSON.stringify(response.data.articles));
  return response.data.articles;
}

function* fetch(action: any) {
  try {
    let data: DataNews[] = yield call(fetchData, action.payload);
    let dataLoading: DataLoading = {
      id: action.payload,
      data: data,
      loading: false,
      err: null
    }
    yield put(actions.newsAction.fetchSuccess(dataLoading));
  } catch (e) {
    console.log(e);
    yield put(actions.newsAction.fetchFail(e));
  }
}

function* fetchCovid(action: any) {
  try {
    let data: DataNews[] = yield call(fetchData, action.payload);
    let dataLoading: DataLoading = {
      id: action.payload,
      data: data,
      loading: false,
      err: null
    }
    yield put(actions.newsAction.fetchCovidSuccess(dataLoading));
  } catch (e) {
    console.log(e);
    yield put(actions.newsAction.fetchFail(e));
  }
}

export const rootNewsSaga = [
  takeLatest( FETCH_DATA, fetch),
  takeLatest( FETCH_DATA_COVID, fetchCovid)
];
