import { updateSelectedCategoriesList } from "../urlParams/updateSelectedCategoriesIds.js";
import { addSelectedCategory } from "../utils/addSelectedCategory.js";
import { removeSelectedCategory } from "../utils/removeSelectedSCategory.js";

export const handleCheckboxChange = (e) => {
  const checkbox = e.target;

  if (checkbox.checked) {
    addSelectedCategory(checkbox.value);
  } else {
    removeSelectedCategory(checkbox.value);
  }
  updateSelectedCategoriesList();
};
