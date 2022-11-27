// The Array.map() method allows you to iterate over an array 
// and modify its elements using a callback function.

// // USING FOR LOOP
// let array_for_loop = [3, 4, 5, 6];

// for (let i = 0; i < array_for_loop.length; i++) {
//   array_for_loop[i] = array_for_loop[i] * 3;
// }

// console.log(array_for_loop); 
// // OUTPUT [9, 12, 15, 18]




// Instead of manually iterating over the array using a loop, you can simply use the built-in Array.map() method.
// USING MAP
// let array = [3, 4, 5, 6];

// let modifiedArray = array.map(function (element) {
//   return element * 3;
// });

// console.log(modifiedArray); 
// // Same OUTPUT [9, 12, 15, 18]




// // map() over an array of objects
// let users = [{
//     firstName: "Susan",
//     lastName: "Steward"
//   },
//   {
//     firstName: "Daniel",
//     lastName: "Longbottom"
//   },
//   {
//     firstName: "Jacob",
//     lastName: "Black"
//   }
// ];

// let userFullnames = users.map(function (element) {
//   return `${element.firstName} ${element.lastName}`;
// })

// console.log(userFullnames); 
// OUTPUT ["Susan Steward", "Daniel Longbottom", "Jacob Black"]




// The syntax for the map() method is
// arr.map(function(value/element, index, array){  }, this);

let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
	console.log(this) // 80
}, 80);
// The callback function by default, its value is undefined


// let arr = [2, 3, 5, 7]

// arr.map(function (element, index, array) {
//   // console.log(this) // 80
//   // OR you can console.log each argument 
//   console.log(element);
//   console.log(index);
//   console.log(array);
//   return element;
// }, 80);



































// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter(item => item % 2 === 0);
// console.log(evens); // [2, 4]


// const students = [
//     { name: 'Quincy', grade: 96 },
//     { name: 'Jason', grade: 84 },
//     { name: 'Alexis', grade: 100 },
//     { name: 'Sam', grade: 65 },
//     { name: 'Katie', grade: 90 }
//   ];

//   const studentGrades = students.filter(student => student.grade >= 90);
//   return studentGrades; // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]