import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

import { SINGLE_PAGE } from "../../../routs.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { selectCoffe } from "../../../selectors.js";
import SliderCard from "../../sliderCard/SliderCard.js";

import classes from "./HeaderSlider.module.css";

function HeaderSlider() {
  const coffe = useSelector(selectCoffe);

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
