import React from 'react';
import Link from 'next/link';
import { DataNews } from '../interface/news';
import style from '../styles/Card.module.css';

type CardType = {
 article: DataNews
}

const Card: React.FC<CardType> = ({ article }) => {
  return(
    <>
      <Link href={article.url} passHref>
        <div className={style.card}>
          <div className={style["card__text"]}>
            <a className={style["text-title"]}>{article.title}</a>
            <p className={style["text-content"]}>{article.content}</p>
            <div className={style["text-time"]}>
              <span>{article.author}</span> 
              <div style={{display: "flex", width:" 15px", alignItems: "center", justifyContent: "center"}}><div className={style["text-divider"]}></div></div>
              <span>{article.publishedAt}</span>
            </div>
          </div>
          <div className={style["card__img"]} style={{backgroundImage:`url(${article.urlToImage})`}}></div>
        </div>
      </Link>
    </>
  );
}

export default Card;
