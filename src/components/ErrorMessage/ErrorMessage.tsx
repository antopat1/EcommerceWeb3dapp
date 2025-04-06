import React from "react";
import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <h4>{children}</h4>
    </div>
  );
};

export default ErrorMessage;
