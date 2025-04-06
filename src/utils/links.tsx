import React from "react";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { toggleSidebar } from "../states/sidebarSlice";
import styles from "../components/Navbar/Navbar.module.css";

const links = [
  {
    url: "/",
    text: "Home",
    icon: <AiFillHome className={styles.navIcon} />,
  },
  {
    url: "/about",
    text: "Chi Siamo",
    icon: <RiTeamFill className={styles.navIcon} />,
  },
  {
    url: "/contattaci",
    text: "contattaci",
    icon: <AiFillMessage className={styles.navIcon} />,
  },
]; 

interface LinkComponentProps {
  classLink: string;
}

const LinkComponent: React.FC<LinkComponentProps> = ({ classLink }) => {
  const dispatch = useDispatch();
  
  return (
    <ul className={classLink}>
      {links.map((link) => {
        return (
          <Link
            key={link.text}
            to={link.url}
            className={styles.navItem}
            onClick={() => dispatch(toggleSidebar())}
          >
            <div className={styles.navLink}>
              {React.cloneElement(link.icon, { className: styles.navIcon })}
              <h5 className={styles.navText}>{link.text}</h5>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

const socialLink = [
  {
    url: "https://www.facebook.com/",
    icon: <FaFacebookSquare className={styles.navIcon} />,
  },
  {
    url: "https://twitter.com/home?lang=it",
    icon: <FaTwitterSquare className={styles.navIcon} />,
  },
  {
    url: "https://www.youtube.com/",
    icon: <FaYoutubeSquare className={styles.navIcon} />,
  },
];

interface SocialComponentProps {
  classSocial: string;
}

const SocialComponent: React.FC<SocialComponentProps> = ({ classSocial }) => {
  return (
    <ul className={classSocial}>
      {socialLink.map((link) => {
        return (
          <li key={link.url} className={styles.navItem}>
            <a href={link.url} aria-label={`Vai a ${link.url}`} className={styles.navLink}>
              {React.cloneElement(link.icon, { className: styles.navIcon })}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export { LinkComponent, SocialComponent };
