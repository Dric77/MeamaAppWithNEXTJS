import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getLanguage, getProducts } from "../actions.js";

import Container from "../Components/container/Container.js";
import Footer from "../Components/footer/Footer.js";
import Header from "../Components/header/Header.js";
import HeaderBg from "../Components/header/HeaderBg.js";
import HeaderSlider from "../Components/header/headerSlider/HeaderSlider.js";
import Modal from "../Components/modal/Modal.js";
import TeaSlider from "../Components/teaSlider/TeaSlider.js";
import CoktailSlider from "../Components/coktailSlider/CoktailSlider.js";
import CakeSlider from "../Components/cake/CakeSlider.js";

import styles from "../styles/Home.module.css";
import MeamaProductSlider from "../Components/meamaProducts/MeamaProductSlider.js";

export default function Home() {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  let modalHandler = () => {
    setOpenModal(!openModal);
    console.log(openModal);
  };

  useEffect(() => {
    const language = localStorage.getItem("choosed_language");
    if (language) {
      dispatch(getProducts(language));
    } else {
      dispatch(getProducts("ka"));
    }
    dispatch(getLanguage());
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Modal modalHandler={modalHandler} openModal={openModal} />
      <HeaderBg>
        <Container>
          <Header modalHandler={modalHandler} />
        </Container>
        <HeaderSlider />
      </HeaderBg>
      <TeaSlider />
      <CoktailSlider />
      <CakeSlider />
      <MeamaProductSlider />
      <Footer />
    </div>
  );
}
