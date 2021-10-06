export const selectAllProducts = (state) => state.products;
export const selectCoffe = (state) => state.products.coffe;
export const selectTea = (state) => state.products.tea;
export const selectCake = (state) => state.products.cake;
export const selectCocktail = (state) => state.products.cocktail;
export const selectMeamaProducts = (state) => state.products.meamaProducts;

export const selectLanguage = (state) => state.products.language;

export const selectLoading = (state) => state.products.isLoading;

export const selectError = (state) => state.products.isError;
