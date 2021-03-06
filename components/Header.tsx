import { useEffect } from 'react';
import { DataCovidLoading } from '../interface/covid';
import { actions } from '../store/action';
import { useAppDispatch, useAppSelector } from '../store/hook';
import style from '../styles/Header.module.css';

const Header = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actions.covidAction.fetchVNCovid());
  }, [dispatch]);
  const dataCovid: DataCovidLoading = useAppSelector(state => state.covid);
  const menuCovid: JSX.Element = (dataCovid.data) ? (
    <div className={style.text}>
      <span style={{color: "red", fontWeight: 700}}>Covid Viet Nam</span>
      <span style={{color: "rgb(201, 48, 44)"}}>Infected: {dataCovid.data.infected}</span>
      <span style={{color: "#ff9c00"}}>Treated: {dataCovid.data.treated}</span>
      <span style={{color: "rgb(40, 167, 69)"}}>Recovered: {dataCovid.data.recovered}</span>
      <span style={{color: "#666"}}>Deceased: {dataCovid.data.deceased}</span>
    </div>
  ) : (
    <></>
  )
  return(
    <>
      <div className={style.header}>
        <h1 className={style.logo}><span className={style["logo-text"]}>Next</span> News</h1>
        {
          (!dataCovid.loading && !dataCovid.err) ? menuCovid : <></>
        }
      </div>
    </>
  );
}

export default Header;