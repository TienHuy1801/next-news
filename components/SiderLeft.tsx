import React, { useEffect, useState } from "react";
import { Nav, NavItem } from "reactstrap";
import style from '../styles/SiderLeft.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faFilm, faFootballBall, faGlobe, faHome, faSave, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../store/hook";
import { actions } from "../store/action";

const SiderLeft = () => {
  const [active, setActive] = useState("top-stories");
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(actions.newsAction.fetchData("top-stories"));
    }, 10)
  }, [dispatch]);
  const handleClick = (id: string) => {
    setActive(id);
    dispatch(actions.newsAction.fetchData(id));
  }
  return(
    <>
      <Nav vertical style={{position:"fixed"}}>
        <NavItem active={active === "top-stories"} onClick={() => handleClick("top-stories")} className={style.item}>
          <FontAwesomeIcon className={style.icon} icon={faHome}/>
          <span className={style.title}>Top Stories</span>
        </NavItem>
        <NavItem active={active === "for-you"} onClick={() => handleClick("for-you")} className={style.item}>
          <FontAwesomeIcon className={style.icon} icon={faUser}/>
          <span className={style.title}>For You</span>
        </NavItem>
        <NavItem active={active === "follow"} onClick={() => handleClick("follow")} className={style.item}>
          <FontAwesomeIcon className={style.icon} icon={faStar}/>
          <span className={style.title}>Following</span>
        </NavItem>
        <NavItem active={active === "saved"} onClick={() => handleClick("saved")} className={style.item}>
          <FontAwesomeIcon className={style.icon} icon={faSave}/>
          <span className={style.title}>Saved</span>
        </NavItem>
        <NavItem className={style.divider}></NavItem>
        <NavItem active={active === "general"} onClick={() => handleClick("general")} className={style.item}>
          <FontAwesomeIcon className={style.icon} icon={faGlobe}/>
          <span className={style.title}>General</span>
        </NavItem>
        <NavItem active={active === "business"} onClick={() => handleClick("business")} className={style.item}>
          <FontAwesomeIcon className={style.icon} icon={faBuilding}/>
          <span className={style.title}>Business</span>
        </NavItem>
        <NavItem active={active === "entertainment"} onClick={() => handleClick("entertainment")} className={style.item}>
          <FontAwesomeIcon className={style.icon} icon={faFilm}/>
          <span className={style.title}>Entertainment</span>
        </NavItem>
        <NavItem active={active === "sports"} onClick={() => handleClick("sports")} className={style.item}>
          <FontAwesomeIcon className={style.icon} icon={faFootballBall}/>
          <span className={style.title}>Sports</span>
        </NavItem>
      </Nav>
    </>
  );
}

export default SiderLeft;