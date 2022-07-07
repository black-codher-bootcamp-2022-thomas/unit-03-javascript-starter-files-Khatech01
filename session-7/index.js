// ****************************************************TASK 1****************************************************
// const animals = ['elephant', 'dog', 'wolf', 'bird', 'cat']
// console.log(animals.pop())

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
// Array.prototype.pop()
// The pop() method removes the last element from an array and returns that element. 
// This method changes the length of the array.



// ****************************************************TASK 2****************************************************

// const names = ['Jeff', 'Harold', 'Marcel', 'Kevin', 'Laura', 'Cassy', 'Helene', 'Jessica', 'Rose', 'Peony'];
// names.sort()
// console.log(names)
// or simply write this code instead of line 15 and 16 console.log(names.sort());
// console.log(names.sort().reverse());

// const num = [5, 325, 67, 100000, 150];
// line 22 or execute num.sort((a, b) => a - b); console.log(num)
// console.log(num.sort(function(a, b) {return a - b}));

// line 25 or execute num.sort((a, b) => b - a); console.log(num)
// console.log(num.sort(function(a, b) {return b - a}));
// https://www.w3schools.com/jsref/jsref_sort.asp







// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
 ];
 console.log([people]);

people.sort((a, b) => {
  return a.age - b.age;
});

 const listedName = []
for ( let index = 0; index < people.length; index++){
  listedName.push(people[index].name)
};

console.log(listedName)

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects

