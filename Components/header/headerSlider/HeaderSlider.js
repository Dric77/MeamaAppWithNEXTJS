import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { selectCoffe } from "../../../selectors.js";
import SliderCard from "../../sliderCard/SliderCard.js";

import classes from "./HeaderSlider.module.css";

function HeaderSlider() {
  const coffe = useSelector(selectCoffe);

  const ref = useRef(null);
  useEffect(() => {
    console.log("width", ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current]);

  return (
    <>
      <h1 className={classes.title}> {coffe && coffe.name && coffe.name} </h1>
      <Swiper className={classes.swiper} wrapperTag="ul">
        {coffe &&
          coffe.products &&
          coffe.products.map((data, index) => (
            <SwiperSlide tag="li" key={data.slug}>
              <SliderCard data={data} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default HeaderSlider;
