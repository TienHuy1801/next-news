import { FETCH_VN_COVID, FETCH_VN_COVID_SUCCESS } from './../type/covid';
import { DataCovidLoading } from '../../interface/covid';

const fetchVNCovid = () => ({
  type: FETCH_VN_COVID
})
const fetchVNCovidSuccess = (data: DataCovidLoading) => ({
  type: FETCH_VN_COVID_SUCCESS,
  payload: data
})

export const covidAction = {
  fetchVNCovid,
  fetchVNCovidSuccess
}