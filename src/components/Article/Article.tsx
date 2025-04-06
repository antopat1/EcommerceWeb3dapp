import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiClipboardList } from "react-icons/hi";
import styles from "./Article.module.css";

import { useDispatch } from "react-redux";
import { setScrollPosition } from "../../states/scrollSlice";

interface ArticleProps {
  strDrinkThumb: string;
  idDrink: string;
  strDrink: string;
}

const Article: React.FC<ArticleProps> = ({ strDrinkThumb: img, idDrink: _id, strDrink: name }) => {
  const [show, setShow] = useState(false);

  const showInfo = () => setShow(true);
  const hideInfo = () => setShow(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const goToArticle = (_id: string) => {
    dispatch(setScrollPosition(window.pageYOffset)); // 🔥 Salva la posizione dello scroll
    navigate(`/article/${_id}`);
  };

  return (
    <article
      className={styles.article}
      onMouseEnter={showInfo}
      onMouseLeave={hideInfo}
    >
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className={show ? `${styles.cardText} ${styles.showInfo}` : styles.cardText}>
        <h4>{name}</h4>
        <div className={`${styles.seeMoreBtn} brand-color`} onClick={() => goToArticle(_id)}>
          <h5>Anteprima & Acquisto</h5>
          <HiClipboardList className="icon" />
        </div>
      </div>
      <div className={styles.cardTextSm}>
        <h5>{name}</h5>
        <div className={`${styles.seeMoreBtn} brand-color`} onClick={() => goToArticle(_id)}>
          <h5>Anteprima & Acquisto</h5>
          <HiClipboardList className="icon" />
        </div>
      </div>
    </article>
  );
};

export default Article;
