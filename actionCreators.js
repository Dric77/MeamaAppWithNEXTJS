import {
  SET_CAKE,
  SET_COCKTAIL,
  SET_COFFE,
  SET_ERRORS,
  SET_LANGUAGE,
  SET_LANGUAGE_DATA,
  SET_LOADING,
  SET_MEAMA_PRODUCTS,
  SET_TEA
} from "./types.js";

export const setCoffe = (coffe) => {
  return {
    type: SET_COFFE,
    coffe
  };
};

export const setTea = (tea) => {
  return {
    type: SET_TEA,
    tea
  };
};

export const setCocktail = (cocktail) => {
  return {
    type: SET_COCKTAIL,
    cocktail
  };
};

export const setCake = (cake) => {
  return {
    type: SET_CAKE,
    cake
  };
};

export const setMeamaProducts = (meamaProducts) => {
  return {
    type: SET_MEAMA_PRODUCTS,
    meamaProducts
  };
};

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    language
  };
};

export const setLoading = (isLoading) => {
  return {
    type: SET_LOADING,
    isLoading
  };
};

export const setErrors = (isError) => {
  return {
    type: SET_ERRORS,
    isError
  };
};

//language action cretors

export const setLanguageData = (language) => {
  return {
    type: SET_LANGUAGE_DATA,
    language
  };
};
