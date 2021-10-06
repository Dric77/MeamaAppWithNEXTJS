import React from "react";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { selectCake } from "../../selectors.js";
import SliderCard from "../sliderCard/SliderCard.js";

import classes from "./CakeSlider.module.css";

function CakeSlider() {
  const data = useSelector(selectCake);

  return (
    <div className={classes.mainContainer}>
      <span className={classes.title}>{data && data.name && data.name}</span>
      <Swiper className={classes.swiper} wrapperTag="ul" loop={false}>
        {data &&
          data.products &&
          data.products.map((data) => (
            <SwiperSlide tag="li" key={data.id}>
              <SliderCard data={data} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default CakeSlider;
