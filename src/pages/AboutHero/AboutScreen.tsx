import React from "react";
import Hero from "../../components/Hero/Hero";
import image from "../../assets/img/about-hero.jpg";
import useTitle from "../../customHook/useTitle";
import styles from "./AboutScreen.module.css";
import { teamInfo } from "../../utils/teamInfo";
import Card from "../../components/Card/Card";

const AboutScreen: React.FC = () => {
  useTitle("CHI SIAMO");
  return (
    <>
      <Hero img={image}>
        <section className={styles.aboutHero}>
          <div className={styles.aboutText}>
            <div className="topline"></div>
            <h3>
              <q>
                Per costruire un mondo migliore, servono idee nuove e persone
                coraggiose
              </q>
            </h3>
            <div className="underline"></div>
          </div>
        </section>
      </Hero>

      <section className={styles.aboutTeam}>
        <div className={`${styles.aboutTeamContent} container`}>
          <h3 className="brand-secondary-color">IL NOSTRO TEAM</h3>
          <div className={styles.cardSection}>
            {teamInfo.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutScreen;
