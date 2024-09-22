export function addCategoriesIdsToUrl(url, categoriesIds) {
  const parts = url.split("?");
  let baseUrl = parts[0];
  let newUrl = baseUrl;

  let existingParams = "";
  if (parts.length > 1) {
    existingParams = parts[1]
      .split("&")
      .filter((param) => !param.startsWith("categories[]"))
      .join("&");
  }

  const pairs = [];
  categoriesIds.forEach((id) => {
    pairs.push(`categories[]=${encodeURIComponent(id)}`);
  });
  const categoriesParams = pairs.join("&");

  const allParams = [existingParams, categoriesParams]
    .filter((element) => !!element)
    .join("&");

  newUrl += allParams ? "?" + allParams : "";

  return newUrl;
}
