import React, { ReactNode } from "react";
import backImage from "../../assets/img/home-hero.jpg";
import style from "./Hero.module.css"; // Importa il CSS Module

interface HeroProps {
  children: ReactNode;
  img?: string;
  disableOverlay?: boolean;
  fullHeight?: boolean; 
}

const Hero: React.FC<HeroProps> = ({ children, img, disableOverlay, fullHeight }) => {
  const image = img || backImage;

  return (
    <div
    className={`${style.heroImgContainer} ${fullHeight ? style.fullHeight : ""}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={!disableOverlay ? style.heroOverlay : ""}>
        <div className={style.heroContainer}>{children}</div>
      </div>
    </div>
  );
};

export default Hero;
