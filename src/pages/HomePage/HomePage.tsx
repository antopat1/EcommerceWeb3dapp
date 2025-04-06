import React from "react";
import useTitle from "../../customHook/useTitle";
import Hero from "../../components/Hero/Hero";
import SearchForm from "../../components/SearchForm/SearchForm";
import style from "./HomePage.module.css"; 
import Lottie from "lottie-react"; 
import animationData from "../../assets/animation/team-focus.json";

const HomePage: React.FC = () => {
  useTitle("MarketPlace Scientifics Paper");

  return (
    <div>
      
      <Hero>
        <div className={style.homeHero}>
          <div className={style.homeHeroText}>
            <div className={style.homeHeroTitle}>
              <h2 className="brand-color"> Web3 Scientific Journal Marketplace </h2>
              <h4>Pubblicazioni decentralizzate per una scienza accessibile</h4>
            </div>
            <p>
              Acquista pubblicazioni scientifiche in sicurezza tramite blockchain e{" "}
              <span className="brand-color">token ERC-20.</span>
            </p>
          </div>
        </div>
        
        <div className={style.homelottieposition}>
        <Lottie animationData={animationData} className={style.lottie}/>
        </div>

      </Hero>
      <br/>
      <br/>
      <SearchForm />
      <br/> 
    </div>
  );
};

export default HomePage;
