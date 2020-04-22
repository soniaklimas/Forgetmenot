import React from "react";
import Button from "../Button/Button";
import styles from "./Header.module.scss";
import HeaderNavigation from "./HeaderNavigation";
import logoImage from "../../assets/images/logo.png";

const Header = ({ openModalFn }) => (
  <header className={styles.wrapper}>
    <img src={logoImage} alt="ForgetMeNot" />
    <HeaderNavigation />
    <Button onClick={openModalFn} secondary>
      new
    </Button>
  </header>
);

export default Header;
