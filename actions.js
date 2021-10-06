import API from "./api.js";
import {
  setCake,
  setCocktail,
  setCoffe,
  setErrors,
  setLanguage,
  setMeamaProducts,
  setTea,
  setLoading,
  setLanguageData
} from "./actionCreators.js";

export const getProducts = (language) => (distaptch) => {
  distaptch(setLoading(true));
  API.getAllData(language)
    .then((data) => {
      distaptch(setCoffe(data[0]));
      distaptch(setTea(data[1]));
      distaptch(setCocktail(data[2]));
      distaptch(setCake(data[3]));
      distaptch(setMeamaProducts(data[4]));
      distaptch(setLanguage(language));
      localStorage.setItem("choosed_language", language);
    })
    .catch((e) => {
      setErrors(true);
    })
    .finally(() => distaptch(setLoading(false)));
};

//language actions

export const getLanguage = () => (distaptch) => {
  distaptch(setLoading(true));
  API.switchLanguage()
    .then((data) => {
      distaptch(setLanguageData(data));
    })
    .catch((e) => {
      setErrors(true);
    })
    .finally(() => distaptch(setLoading(false)));
};
