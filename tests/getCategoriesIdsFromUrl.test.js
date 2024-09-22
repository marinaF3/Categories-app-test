import { getCategoriesIdsFromUrl } from "../src/urlParams/getCategoriesIdsFromUrl.js";

console.log(`\nTesting getCategoriesIdsFromUrl:\n`);

let successfulTests = 0;
let failedTests = 0;

const testCases = [
  { input: "https://example.com/?categories[]=1", expected: ["1"] },
  {
    input: "https://example.com/?categories[]=1&categories[]=2&categories[]=3",
    expected: ["1", "2", "3"],
  },
  { input: "https://example.com/", expected: [] },
  {
    input: "https://example.com/?categories%5B%5D=1&categories%5B%5D=2",
    expected: ["1", "2"],
  },
  { input: "https://example.com/?categories[]=1&page=2", expected: ["1"] },
  {
    input: "https://example.com/category?id=123&categories[]=4&categories[]=5",
    expected: ["4", "5"],
  },
  {
    input:
      "https://example.com/?otherParam=value&categories[]=6&categories[]=7",
    expected: ["6", "7"],
  },
];

testCases.forEach((testCase, index) => {
  try {
    const result = getCategoriesIdsFromUrl(testCase.input);
    if (JSON.stringify(result) === JSON.stringify(testCase.expected)) {
      console.log(`\x1b[32m✓ Test ${index + 1}: Passed\x1b[0m`);
      successfulTests++;
    } else {
      console.log(`\x1b[31m✗ Test ${index + 1}: Failed\x1b[0m`);
      console.log(`Expected: ${JSON.stringify(testCase.expected)}`);
      console.log(`Received: ${JSON.stringify(result)}`);
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
