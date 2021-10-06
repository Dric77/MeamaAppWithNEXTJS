import React from "react";
import Link from "next/link";

import classes from "./SliderCard.module.css";
import { SINGLE_PAGE } from "../../routs.js";

function SliderCard({ data }) {
  return (
    <div
      className={classes.card}
      style={{
        backgroundColor: data.bgColor
      }}
    >
      <Link href={SINGLE_PAGE + data.slug}>
        <a>
          <img src={data.mainPhoto} />
          <div className={classes.title}>
            <h3> {data.name} </h3>
            <h1> {data.price} ₾</h1>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default SliderCard;
