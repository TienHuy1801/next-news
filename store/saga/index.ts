import { all } from 'redux-saga/effects';
import { rootCovidSaga } from './covid';
import { rootNewsSaga } from './news';

export default function* rootSaga() {
  yield all([
    ...rootNewsSaga,
    ...rootCovidSaga
  ])
}