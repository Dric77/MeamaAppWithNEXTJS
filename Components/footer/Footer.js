import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../selectors.js";

import API from "../../api.js";

import classes from "./Footer.module.css";
import Contaier from "../container/Container.js";

function Footer() {
  const language = useSelector(selectLanguage);
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    API.getFooterData(`${language}/contact-info`).then((data) =>
      setContactInfo(data)
    );
  }, [language]);

  return (
    <Contaier>
      <div className={classes.footerContainer}>
        <hr className={classes.line} />
        <h4> {contactInfo && contactInfo.name && contactInfo.name} </h4>
        <div>
          <h1>{contactInfo && contactInfo.value && contactInfo.value}</h1>
          <div className={classes.socialLinks}>
            {contactInfo &&
              contactInfo.socialLinks &&
              contactInfo.socialLinks.map((el, i) => (
                <a key={i} href={el.link} target="_blank">
                  <img src={el.imageUrl} />
                </a>
              ))}
          </div>
        </div>
      </div>
    </Contaier>
  );
}

export default Footer;
