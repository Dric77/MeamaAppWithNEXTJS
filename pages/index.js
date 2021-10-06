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
import { useRouter } from "next/dist/client/router";
import { HOME_PAGE } from "../routs.js";
import ErrorPage from "./errorPage/ErrorPage.js";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);

  let modalHandler = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    const language = localStorage.getItem("choosed_language");
    if (language) {
      dispatch(getProducts(language));
      router.push({
        pathname: HOME_PAGE,
        query: { language: language }
      });
    } else {
      dispatch(getProducts("ka"));
      router.push({
        pathname: HOME_PAGE,
        query: { language: "ka" }
      });
    }
    dispatch(getLanguage());
  }, []);

  return (
    <ErrorPage>
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
    </ErrorPage>
  );
}
