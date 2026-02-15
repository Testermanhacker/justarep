const { greet, add, multiply } = require('../src/utils');

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`✓ ${testName}`);
  } else {
    console.log(`✗ ${testName}: expected ${expected}, got ${actual}`);
    process.exitCode = 1;
  }
}

console.log('Running tests...\n');

// Test greet function
assertEqual(greet('World'), 'Hello, World!', 'greet returns correct greeting');
assertEqual(greet('Alice'), 'Hello, Alice!', 'greet works with different names');

// Test add function
assertEqual(add(2, 3), 5, 'add returns correct sum');
assertEqual(add(-1, 1), 0, 'add handles negative numbers');
assertEqual(add(0, 0), 0, 'add handles zeros');

// Test multiply function
assertEqual(multiply(4, 5), 20, 'multiply returns correct product');
assertEqual(multiply(-2, 3), -6, 'multiply handles negative numbers');
assertEqual(multiply(0, 100), 0, 'multiply handles zero');

console.log('\nTests completed!');
