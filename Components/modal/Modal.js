import React from "react";
import CheckBox from "../checkbox/CheckBox.js";
import { useDispatch } from "react-redux";

import classes from "./Modal.module.css";

import { setLanguage } from "../../actionCreators.js";
import { getProducts } from "../../actions.js";

export default function Modal({ modalHandler, openModal }) {
  const dispatch = useDispatch();

  const hanldeLanguage = (e) => {
    dispatch(setLanguage(e.target.value));
    dispatch(getProducts(e.target.value));
    localStorage.setItem("choosed_language", e.target.value);
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
