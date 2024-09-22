import { addCategoriesIdsToUrl } from "../src/urlParams/addCategoriesIdsToUrl.js";

console.log(`\nTesting addCategoriesIdsToUrl:\n`);

let successfulTests = 0;
let failedTests = 0;

const testCases = [
  {
    input: { url: "https://example.com", categoriesIds: [1, 2, 3] },
    expected:
      "https://example.com?categories[]=1&categories[]=2&categories[]=3",
  },
  {
    input: { url: "https://example.com?param=value", categoriesIds: [4, 5] },
    expected: "https://example.com?param=value&categories[]=4&categories[]=5",
  },
  {
    input: {
      url: "https://example.com?existingCategories[]=old",
      categoriesIds: [6, 7],
    },
    expected:
      "https://example.com?existingCategories[]=old&categories[]=6&categories[]=7",
  },
  {
    input: { url: "https://example.com", categoriesIds: [] },
    expected: "https://example.com",
  },
  {
    input: { url: "https://example.com?param=value", categoriesIds: [] },
    expected: "https://example.com?param=value",
  },
];

testCases.forEach((testCase, index) => {
  try {
    const result = addCategoriesIdsToUrl(
      testCase.input.url,
      testCase.input.categoriesIds
    );
    if (result === testCase.expected) {
      console.log(`\x1b[32m✓ Test ${index + 1}: Passed\x1b[0m`);
      successfulTests++;
    } else {
      console.log(`\x1b[31m✗ Test ${index + 1}: Failed\x1b[0m`);
      console.log(`Expected: ${testCase.expected}`);
      console.log(`Received: ${result}`);
      failedTests++;
    }
  } catch (error) {
    console.log(`\x1b[31m✗ Test ${index + 1}: Failed\x1b[0m`);
    console.log(`Error: ${error.message}`);
    failedTests++;
  }
});

console.log(`\nTotal Tests: ${successfulTests + failedTests}`);
console.log(`Successful Tests: ${successfulTests}`);
console.log(`Failed Tests: ${failedTests}`);
