export const setCategoriesIdsToLocalStorage = (selectedIds) => {
  localStorage.setItem("selectedCategoriesIds", JSON.stringify(selectedIds));
};

export const getCategoriesIdsFromLocalStorage = () => {
  const selectedIds =
    JSON.parse(localStorage.getItem("selectedCategoriesIds")) || [];
  return selectedIds;
};
