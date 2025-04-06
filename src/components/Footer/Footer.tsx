import React from "react";
import style from "./Footer.module.css"; // Importa il CSS Module

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <h4 className={style.text}>
          All &copy; reserved to{" "}
          <span className={style.brandColor}> -DAPP Web3 Team</span>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;