import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setErrors } from "../../actionCreators.js";

import { ERROR_PAGE, HOME_PAGE } from "../../routs.js";
import { selectError } from "../../selectors.js";

import classes from "./ErrorPage.module.css";

function ErrorPage({ children }) {
  const dispatch = useDispatch();
  const isError = useSelector(selectError);
  const router = useRouter();

  useEffect(() => {
    const language = localStorage.getItem("choosed_language");
  }, []);

  const removeError = () => {
    dispatch(setErrors(false));
    router.push({
      pathname: router.pathname,
      query: { language: language }
    });
  };

  if (isError) {
    return (
      <div className={classes.mainContainer}>
        <div className={classes.padinDiv}>
          <div className={classes.message}>
            <h1>ოპააა...</h1>
            <p>გვერდი ვერ მოიძებნა</p>
          </div>
          <Link href={HOME_PAGE}>
            <button className={classes.btn} onClick={removeError}>
              მთავარზე დაბრუნება
            </button>
          </Link>
        </div>
      </div>
    );
  } else {
    return children;
  }
}

export default ErrorPage;
