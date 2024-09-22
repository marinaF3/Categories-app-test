import { categoriesCount } from "../constants.js";
import { handleCheckboxChange } from "./handleCheckboxes.js";

export function createCheckboxes() {
  const checkboxesContainer = document.getElementById("categories");

  for (let i = 0; i < categoriesCount; i++) {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    label.textContent = `Category ${i + 1}`;
    label.htmlFor = checkbox.id;
    label.classList.add("category-item");
    checkbox.type = "checkbox";
    checkbox.id = `category-${i + 1}`;
    checkbox.value = i + 1;
    checkbox.addEventListener("change", handleCheckboxChange);
    label.prepend(checkbox);
    checkboxesContainer.appendChild(label);
  }
}
