const { greet, add } = require("./index");

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`\u2713 PASS: ${message}`);
    passed++;
  } else {
    console.error(`\u2717 FAIL: ${message}`);
    failed++;
  }
}

// Test greet function
assert(greet("Alice") === "Hello, Alice! Welcome to Azure DevOps CI/CD.", "greet returns correct message");
assert(greet("") === "Hello, ! Welcome to Azure DevOps CI/CD.", "greet handles empty string");

// Test add function
assert(add(2, 3) === 5, "add returns correct sum");
assert(add(-1, 1) === 0, "add handles negative numbers");
assert(add(0, 0) === 0, "add handles zeros");

console.log(`\nResults: ${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
}