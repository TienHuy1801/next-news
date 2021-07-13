import { useEffect } from 'react';
import { DataLoading, DataNews } from '../interface/news';
import { actions } from '../store/action';
import { useAppDispatch, useAppSelector } from '../store/hook';
import style from '../styles/Covid.module.css';

const Covid = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actions.newsAction.fetchDataCovid("covid")); 
  }, [dispatch]);
  const data: DataLoading = useAppSelector(state => state.news);
  if (!data.loading && !data.err) {
    return(
      <>
        <div className={style["covid"]}>
          <h3>COVID-19 News</h3>
          <div className={style["divider"]}></div>
          {
            data.data.map((article: DataNews, index: number) => {
              return(
                <div key={index}>
                  <p className={style.title}>{article.title}</p>
                  <p>{article.author}</p>        
                </div>
              )
            })
          }
        </div>
      </>
    );
  } else {
    return <></>
  }
}

export default Covid;