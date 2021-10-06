import React from "react";
import CheckBox from "../checkbox/CheckBox.js";
import { useDispatch } from "react-redux";

import classes from "./Modal.module.css";

import { setLanguage } from "../../actionCreators.js";
import { getProducts } from "../../actions.js";
import { HOME_PAGE } from "../../routs.js";
import { useRouter } from "next/dist/client/router";

export default function Modal({ modalHandler, openModal }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const hanldeLanguage = (e) => {
    dispatch(setLanguage(e.target.value));
    dispatch(getProducts(e.target.value));
    localStorage.setItem("choosed_language", e.target.value);
    dispatch(getProducts(e.target.value));
    router.push({
      pathname: HOME_PAGE,
      query: { language: e.target.value }
    });
  };

  return (
    <div
      className={openModal ? classes.openModal : classes.closeModal}
      onClick={modalHandler}
    >
      <div className={classes.modal}>
        <div className={classes.modalContent}>
          <h1 className={classes.title}>ენა</h1>
          <CheckBox hanldeLanguage={hanldeLanguage} />
        </div>
      </div>
    </div>
  );
}
