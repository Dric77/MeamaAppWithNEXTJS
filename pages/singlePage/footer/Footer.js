import React from "react";

import classes from "./Footer.module.css";

export default function Footer({ singleData }) {
  return (
    <footer className={classes.footer}>
      <p className={classes.title}> {singleData.title} </p>
      <p className={classes.description}>
        ესპრესო არის ყავის ყველაზე ძლიერი და მწარე სახეობა. მზადდება მხოლოდ
        ყავით წყლის დანამატის გარეშე.
      </p>
    </footer>
  );
}
