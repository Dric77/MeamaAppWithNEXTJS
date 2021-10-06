import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import logo from "../../Logos/Logo.png";
import lanLogo from "../../Logos/lanLogo.png";
import arrow from "../../Logos/arrow.png";

import classes from "./Header.module.css";
import { selectLanguage } from "../../selectors.js";

export default function Header({ modalHandler }) {
  const languages = useSelector(selectLanguage);

  return (
    <div className={classes.container} onClick={modalHandler}>
      <div>
        <Image
          className={classes.logo}
          src={logo}
          alt="Main logo"
          width="80px"
          height="80px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={classes.lanSwitcher} onClick={modalHandler}>
        <Image src={lanLogo} width="25px" height="25px" alt="Language Logo" />
        <h3> {languages && languages} </h3>
        <Image src={arrow} alt="DropDown arror" />
      </div>
    </div>
  );
}
