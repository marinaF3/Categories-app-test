import {
  getCategoriesIdsFromLocalStorage,
  setCategoriesIdsToLocalStorage,
} from "../data";

export const removeSelectedCategory = (selectedCategoryId) => {
  const selectedIds = getCategoriesIdsFromLocalStorage();
  const filteredIds = selectedIds.filter((id) => id !== selectedCategoryId);
  setCategoriesIdsToLocalStorage(filteredIds);
};
