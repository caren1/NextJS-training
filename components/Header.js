import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with latest news
      </p>
    </div>
  );
};

export default Header;
