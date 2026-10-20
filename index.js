function greet(name) {
  return `Hello, ${name}! Welcome to Azure DevOps CI/CD.`;
}

function add(a, b) {
  return a + b;
}

module.exports = { greet, add };

console.log(greet("pipeline"));