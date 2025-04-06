import React from "react";
import Lottie from "lottie-react"; 
import animationData from "../../assets/animation/not-found.json";
import { Link } from "react-router-dom";
import useTitle from "../../customHook/useTitle";
import style from "./NotFoundPage.module.css";

const NotFoundPage: React.FC = () => {
  useTitle("ERRORE");

  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>Pagina Non Trovata</h3>
      <div className={style.lottieContainer}>
        <Lottie animationData={animationData} className={style.lottie} />
      </div>
      <Link className={style.button} to="/">
        Torna in Home
      </Link>
    </div>
  );
};

export default NotFoundPage;

