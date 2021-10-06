import React from "react";
import Image from "next/image";

import lanBlack from "../../../Logos/lanBlack.png";
import Link from "next/link";
import { HOME_PAGE } from "../../../routs.js";

import classes from "./SingleProductHeader.module.css";
import { TiArrowLeft } from "react-icons/ti";

function SingleProductHeader({ language }) {
  return (
    <header className={classes.header}>
      <Link href={HOME_PAGE}>
        <div className={classes.backIcon}>
          <TiArrowLeft size="2rem" />
        </div>
      </Link>
      <div className={classes.lanSwitcher}>
        <Image alt="switche" src={lanBlack} width="25px" height="25px" />
        <h5> {language} </h5>
      </div>
    </header>
  );
}

export default SingleProductHeader;
