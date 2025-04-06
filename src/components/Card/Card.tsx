import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  text?: string;
  img?: string;
  subtitle?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, icon, text, img, subtitle, className }) => {
  return (
    <article className={`${styles.wrapper} ${className ? className : ""}`}>
      <div className={`${styles.card} container`}>
        <div className={styles.cardTitle}>
          <h4>{title}</h4>
        </div>
        {subtitle ? (
          <div className={styles.cardSubtitle}>
            <h6>{subtitle}</h6>
          </div>
        ) : (
          <div className={styles.cardIcon}>{icon}</div>
        )}
        {text ? (
          <div className={styles.cardText}>
            <p>{text}</p>
          </div>
        ) : (
          img && <img src={img} alt={title} className={styles.cardImg} />
        )}
      </div>
    </article>
  );
};

export default Card;
