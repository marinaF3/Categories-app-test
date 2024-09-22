import { createCheckboxes } from "./src/checkboxes/createCheckboxes.js";
import { createUrl } from "./src/urlParams/createUrl.js";
import { initializeCategoriesFromUrl } from "./src/urlParams/initializeCategoriesFromUrl.js";
import { resetCategiriesForm } from "./src/utils/resetCategoriesForm.js";
const buttonCopyUrl = document.getElementById("btn-copy-url");
const buttonReset = document.getElementById("btn-reset");

createCheckboxes();
initializeCategoriesFromUrl();

buttonCopyUrl.addEventListener("click", () => {
  const urlToCopy = createUrl();
  navigator.clipboard.writeText(urlToCopy);
});

buttonReset.addEventListener("click", resetCategiriesForm);

