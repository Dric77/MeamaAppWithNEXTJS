import React from "react";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { selectTea } from "../../selectors.js";
import SliderCard from "../sliderCard/SliderCard.js";

import classes from "./TeaSlider.module.css";

function TeaSlider() {
  const data = useSelector(selectTea);

  return (
    <div className={classes.mainContainer}>
      <span className={classes.title}>{data && data.name && data.name}</span>
      <Swiper className={classes.swiper} wrapperTag="ul">
        {data &&
          data.subCategories &&
          data.subCategories[0].products &&
          data.subCategories[0].products.map((data) => (
            <SwiperSlide tag="li" key={data.id}>
              <SliderCard data={data} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default TeaSlider;
