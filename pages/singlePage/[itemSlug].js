import React, { useEffect, useState } from "react";

import classes from "./SinglePage.module.css";

import Container from "../../Components/container/Container.js";
import { selectLanguage } from "../../selectors.js";
import SingleProductHeader from "./singleProductHeader/SingleProductHeader.js";
import API from "../../api.js";
import Footer from "./footer/Footer.js";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";

function SinglePage() {
  const [singleData, setSingleData] = useState({});
  const [activeImg, setActiveImg] = useState(0);

  const router = useRouter();

  const path = router.query.itemSlug;

  let language = useSelector(selectLanguage);

  useEffect(() => {
    if (path) {
      API.getSingleData(`${language}/product/${path}`)
        .then((data) => setSingleData(data))
        .catch((e) => console.log("single producet error", e));
    }
  }, [path]);

  const handleImgs = (e) => {
    setActiveImg(e.target.alt);
  };

  return (
    // <Loader>
    <div className={classes.maxWidth}>
      <Container>
        <SingleProductHeader language={language} />

        <div className={classes.mainContainer}>
          <div className={classes.detail}>
            <div className={classes.title}>
              <h1> {singleData.name} </h1>
              <h1> {singleData.price}₾ </h1>
            </div>
            <div className={classes.specifications}>
              <div className={classes.text}>
                <h4
                  style={{
                    color: "rgba(0, 0, 0, 0.5)",
                    fontSize: "0.9rem",
                    marginBottom: "10px"
                  }}
                >
                  {singleData &&
                    singleData.specifications &&
                    singleData.specifications[0].name}
                </h4>
                <h4 style={{ fontSize: "1.4rem" }}>
                  {singleData &&
                    singleData.specifications &&
                    singleData.specifications[0].value}
                </h4>
              </div>

              <div className={classes.imgGroup}>
                {singleData &&
                  singleData.imgUrls &&
                  singleData.imgUrls.map((el, index) => (
                    <div
                      className={classes.imgBg}
                      style={{ backgroundColor: singleData.bgColor }}
                      key={index}
                    >
                      <img
                        alt={index}
                        src={el}
                        className={index == activeImg && classes.active}
                        onClick={handleImgs}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div
            className={classes.productImg}
            style={{ backgroundColor: singleData.bgColor }}
          >
            <img
              src={
                singleData.imgUrls
                  ? singleData.imgUrls[activeImg]
                  : singleData.mainPhoto
              }
            />
          </div>
        </div>

        <Footer singleData={singleData} />
      </Container>
    </div>
    // </Loader>
  );
}

export default SinglePage;
