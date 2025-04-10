// import React, { useEffect } from "react";
// import { FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { LinkComponent, SocialComponent } from "../../utils/links";
// import {  useDispatch } from "react-redux";
// import { toggleSidebar } from "../../states/sidebarSlice";
// import Connectors from "../../components/Connectors/Connectors";
// import styles from "./Navbar.module.css";

// const Navbar: React.FC = () => { 
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const handleResize = () => {
//       // Forza un reflow del DOM per aggiornare immediatamente la disposizione
//       document.body.style.display = 'none';
//       document.body.offsetHeight; 
//       document.body.style.display = '';
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <nav className={styles.nav}>
//       <div className={`${styles.container} ${styles.navContainer}`}>
//         <header className={styles.navHeader}>
//           <Link to="/" className={styles.navBrand}>
//             <h3>Gianni Dapp</h3>
//           </Link>
          
//           <div className={styles.navToggler}>
//             <button className={`${styles.iconBtn} ${styles.btn} ${styles.navToggler}`} onClick={() => dispatch(toggleSidebar())}>
//               <FaBars className={styles.navIcon} />
//             </button>
//           </div>
//         </header>
//         <LinkComponent classLink={styles.navLinks} />
        
//         <SocialComponent classSocial={styles.socialTop} />
        
//       </div>
//       <Connectors />
      
//     </nav>
//   );
// };

// export default Navbar;



import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LinkComponent, SocialComponent } from "../../utils/links";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../states/sidebarSlice";
import Connectors from "../../components/Connectors/Connectors";
import Balance from "../../components/Balance/Balance";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => { 
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      // Forza un reflow del DOM per aggiornare immediatamente la disposizione
      document.body.style.display = 'none';
      document.body.offsetHeight; 
      document.body.style.display = '';
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <div className={`${styles.container} ${styles.navContainer}`}>
          <header className={styles.navHeader}>
            <Link to="/" className={styles.navBrand}>
              <h3>Gianni Dapp</h3>
            </Link>
            
            <div className={styles.navToggler}>
              <button className={`${styles.iconBtn} ${styles.btn} ${styles.navToggler}`} onClick={() => dispatch(toggleSidebar())}>
                <FaBars className={styles.navIcon} />
              </button>
            </div>
          </header>
          <LinkComponent classLink={styles.navLinks} />
          
          <SocialComponent classSocial={styles.socialTop} />
          
        </div>
        <Connectors />
      </nav>
      
      <div className={styles.balanceWrapper}>
        <Balance />
      </div>
    </div>
  );
};

export default Navbar;