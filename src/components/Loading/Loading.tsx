// import React from "react";

// const Loading = () => {
//   return (
//     <div className="loading-position">
//       <div className="lds-roller">
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//     </div>
//   );
// };

// export default Loading;



import React from "react";
import styles from "./Loading.module.css";

const Loading: React.FC = () => {
  return (
    <div className={styles.loadingPosition}>
      <div className={styles.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
