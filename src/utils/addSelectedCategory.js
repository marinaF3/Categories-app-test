import {
  getCategoriesIdsFromLocalStorage,
  setCategoriesIdsToLocalStorage,
} from "../data";

export const addSelectedCategory = (selectedCategoryId) => {
  const selectedIds = getCategoriesIdsFromLocalStorage();
  const updatedSelectedIds = [...selectedIds, selectedCategoryId];
  setCategoriesIdsToLocalStorage(updatedSelectedIds);
};
