function foo(a, b) {
  // Type checking before operation
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error: throw new Error('Invalid input types');
  }
  return a + b;
}
console.log(foo(1, 2)); // Output: 3
console.log(foo(1, "2")); // Output: NaN

//Alternative solution using Number() for type conversion
function foo2(a, b) {
  return Number(a) + Number(b);
}
console.log(foo2(1, "2")); // Output: 3