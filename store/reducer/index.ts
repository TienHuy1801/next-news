import { covidReducer } from './covid';
import { newsReducer } from './news';
import { combineReducers } from "redux";

export default combineReducers({
  news: newsReducer,
  covid: covidReducer
})