import { getCategoriesIdsFromLocalStorage } from "../data.js";
import { addCategoriesIdsToUrl } from "./addCategoriesIdsToUrl.js";

export const createUrl = () => {
  const selectedIds = getCategoriesIdsFromLocalStorage();
  return addCategoriesIdsToUrl(window.location.href, selectedIds);
};
