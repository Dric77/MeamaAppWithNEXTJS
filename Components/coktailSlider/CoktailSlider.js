import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { selectCocktail } from "../../selectors.js";
import Filter from "../filter/Filter.js";
import SliderCard from "../sliderCard/SliderCard.js";

import classes from "./CoktailSlider.module.css";

function TeaSlider() {
  const data = useSelector(selectCocktail);

  const [choosedOption, setChoosedOption] = useState(0);

  let filterHanlder = (e) => {
    setChoosedOption(e.target.value);
  };

  return (
    <div className={classes.mainContainer}>
      <span className={classes.title}>{data && data.name && data.name}</span>
      <Filter
        data={data}
        choosedOption={choosedOption}
        filterHanlder={filterHanlder}
      />
      <Swiper className={classes.swiper} wrapperTag="ul">
        {data &&
          data.subCategories &&
          data.subCategories[0].products &&
          data.subCategories[choosedOption].products.map((data) => (
            <SwiperSlide tag="li" key={data.id}>
              <SliderCard data={data} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default TeaSlider;
