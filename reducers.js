import { combineReducers } from "redux";
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

const productState = {
  coffe: [],
  tea: [],
  cocktail: [],
  cake: [],
  meamaProducts: [],
  language: "ka",
  isLoading: false,
  isError: false,
  errors: ""
};

const productsReducer = (state = productState, action) => {
  switch (action.type) {
    case SET_COFFE:
      return {
        ...state,
        coffe: action.coffe
      };
    case SET_TEA:
      return {
        ...state,
        tea: action.tea
      };
    case SET_COCKTAIL:
      return {
        ...state,
        cocktail: action.cocktail
      };
    case SET_CAKE:
      return {
        ...state,
        cake: action.cake
      };
    case SET_MEAMA_PRODUCTS:
      return {
        ...state,
        meamaProducts: action.meamaProducts
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.language
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case SET_ERRORS:
      return {
        ...state,
        isError: action.isError
      };

    default:
      return state;
  }
};

const langugaeState = {
  languageData: []
};

const languageReducer = (state = langugaeState, action) => {
  switch (action.type) {
    case SET_LANGUAGE_DATA:
      return {
        ...state,
        languageData: action.languageData
      };
    default:
      return state;
  }
};

const reducers = {
  products: productsReducer,
  language: languageReducer
};

export default combineReducers(reducers);
