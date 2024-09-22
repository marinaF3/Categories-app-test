import { DISPLAY } from "../constants.js";
import { getCategoriesIdsFromLocalStorage } from "../data.js";
import { clearSelectedCategoriesIdsList } from "../utils/clearSelectedCategoriesIds.js";

export const updateSelectedCategoriesList = () => {
  const selectedIds = getCategoriesIdsFromLocalStorage();
  const selectedCategoriesList = document.getElementById(
    "selected-categories-list"
  );
  const title = document.querySelector(".selected-categories-title");

  title.style.display = selectedIds.length > 0 ? DISPLAY.BLOCK : DISPLAY.NONE;

  selectedCategoriesList.innerHTML = "";
  clearSelectedCategoriesIdsList();

  selectedIds.forEach((id) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.textContent = id;
    selectedCategoriesList.appendChild(listItem);
  });
};
