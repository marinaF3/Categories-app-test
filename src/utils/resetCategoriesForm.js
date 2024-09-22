import { setCategoriesIdsToLocalStorage } from "../data.js";
import { clearSelectedCategoriesIdsList } from "./clearSelectedCategoriesIds.js";
import { DISPLAY } from "../constants.js";

export const resetCategiriesForm = () => {
  const title = document.querySelector(".selected-categories-title");
  const checkboxesList = Array.from(
    document.querySelectorAll(
      '#categories .category-item input[type="checkbox"]'
    )
  );

  title.style.display = DISPLAY.NONE;

  setCategoriesIdsToLocalStorage([]);

  checkboxesList.forEach((checkbox) => {
    checkbox.checked = false;
  });

  clearSelectedCategoriesIdsList();
};
