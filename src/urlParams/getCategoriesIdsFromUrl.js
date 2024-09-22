export function getCategoriesIdsFromUrl(url) {
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search);
  const categoriesIds = params.getAll('categories[]');

  return categoriesIds || [];
}
