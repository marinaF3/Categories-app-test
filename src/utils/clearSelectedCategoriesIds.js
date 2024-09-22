export const clearSelectedCategoriesIdsList = () => {
  const selectedIdsList = document.querySelectorAll(
    "#selected-categories-list .list-item"
  );
  selectedIdsList.forEach((element) => {
    element.remove();
  });
};
