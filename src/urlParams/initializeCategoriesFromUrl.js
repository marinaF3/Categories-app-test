import { updateSelectedCategoriesList } from "./updateSelectedCategoriesIds.js";
import { getCategoriesIdsFromUrl } from "./getCategoriesIdsFromUrl.js";
import {
  getCategoriesIdsFromLocalStorage,
  setCategoriesIdsToLocalStorage,
} from "../data.js";

export function initializeCategoriesFromUrl() {
  const categoryIds = getCategoriesIdsFromUrl(window.location.href);

  setCategoriesIdsToLocalStorage(categoryIds);
  const selectedCategoriesIds = getCategoriesIdsFromLocalStorage();

  selectedCategoriesIds.forEach((id) => {
    document.querySelector(`#category-${id}`).checked = true;
  });

  updateSelectedCategoriesList();
}
