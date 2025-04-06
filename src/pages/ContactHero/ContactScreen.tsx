import React from "react";
import Hero from "../../components/Hero/Hero";
import backImage from "../../assets/img/contact-Hero.jpg";
import useTitle from "../../customHook/useTitle";
import styles from "./ContactScreen.module.css";

const ContactScreen: React.FC = () => {
  useTitle("CONTATTACI");
  return (
    <>
      <Hero img={backImage} fullHeight>
        <div className={styles.contactHero}>
          <section>
            <div className={styles.contactHeroText}>
              <div className={styles.contactHeroTitle}>
                <h2 className={styles.contactTitle}>Sei un Autore?</h2>
                <h4 className={styles.contactSubtitle}>
                  Il nostro team è sempre disponibile per valutare possibili
                  nuovi nuovi articoli scientifici da aggiungere per la vendita
                  su piattaforma!
                </h4>
              </div>
            </div>
          </section>

          <section >
            <div className={styles.contactFormContainer}>
              <form
                className={styles.contactForm}
                action="https://formspree.io/f/xwkdkoov"
                method="POST"
              >
                <div className={styles.formGroup}>
                  <label htmlFor="nome" className={styles.formLabel}>
                    Nome Cognome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className={styles.formInput}
                    placeholder="Mario Rossi"
                    required
                  />
                  <hr />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.formInput}
                    placeholder="mariorossi@example.com"
                    required
                  />
                  <hr />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="ricetta" className={styles.formLabel}>
                    Lascia un messaggio
                  </label>
                  <textarea
                    id="ricetta"
                    name="ricetta"
                    className={styles.formInput}
                    placeholder="Hello.."
                    style={{ resize: "none" }}
                    required
                  />
                  <hr />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Invia Ricetta
                </button>
              </form>
            </div>
          </section>
        </div>
      </Hero>
    </>
  );
};

export default ContactScreen;
