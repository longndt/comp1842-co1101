//declare function with traditional (old) syntax
function total(a, b) {
   return a + b;
}

//declare function with new syntax (from ES6)
// => : arrow function
sum = (x, y) => x + y;

//test functions
c = total(3, 5);
console.log(c);

z = sum(10, 20);
console.log(z);