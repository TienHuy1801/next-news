import React from "react";
import { DataLoading, DataNews } from "../interface/news";
import { useAppSelector } from "../store/hook";
import Card from "./Card";
import style from '../styles/News.module.css';
import { Alert } from "reactstrap";

const News: React.FC = () => {
  const data: DataLoading = useAppSelector(state => state.news);
  if (data.err) {
    return(
      <>
        <Alert color="danger">
          {data.err.toString()}
        </Alert>
      </>
    );
  }
  if (data.loading || !data) {
    return(
      <>
        <div className={style["container"]}>
          <div className={style["lds-ring"]}><div></div><div></div><div></div><div></div></div>
        </div>
      </>
    )
  } else {
    var title: string = data.id;
    title = title.split('-').join(' ');
    if (data.id !== 'covid'){
      return(
        <>
        <h1 style={{textTransform:"capitalize", marginLeft: "30px"}}>{title}</h1>
        {
          data.data.map((article: DataNews, index: number) => {
            return <Card key={index} article={article} />
          })
        }
        </>
      );
    } else {
      return <></>
    }
  }
}

export default News;