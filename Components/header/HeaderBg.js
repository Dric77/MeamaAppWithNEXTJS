import React from "react";

import classes from "./Header.module.css";

function HeaderBg({ children }) {
  return (
    <div className={classes.bg}>
      <div className={classes.bgImage}>{children}</div>
    </div>
  );
}

export default HeaderBg;
