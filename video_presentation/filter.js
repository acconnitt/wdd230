//METHOD JAVASCRIPT FILTER

// long way to filter
let numbers = [1,5,23,4,12,45,78,8,8.9,10,11,3.4,10.1,84,6]

//empty array
// let greaterTen = [];

// for (let i = 0; i<numbers.length; i++) {
//   var currentNumber = numbers[i];
//   if (currentNumber > 10) {
//     greaterTen.push(currentNumber)
//   }
// }

// console.log(greaterTen); // [23, 12, 45, 78, 11, 10.1, 84]


// simplify method 
// let greaterTen2 = numbers.filter(number => number > 10 );
// console.log(greaterTen2); // [23, 12, 45, 78, 11, 10.1, 84]


// array
// let arrNum = [15, 39, 20, 32, 30, 45, 22]
// // filter numbers that odd or has a remainder is = 0
// oddArr = arrNum.filter(num => num % 2 === 0);
// // output
// console.log(oddArr); // output [ 20, 32, 30, 22 ]





//ES6
// let greaterTen = numbers.filter(number => number > 10 );
// console.log(greaterTen); // []

// // with return
// let greaterTen = numbers.filter(number => number > 10 ); // return implicito
// console.log(greaterTen); // [23, 12, 45, 78, 11, 10.1, 84]

// // // ES5
// var greaterTen = numbers.filter(function(){ 
//   numbers > 10 
// });
// console.log(greaterTen); // []

// // // with return
// var greaterTen = numbers.filter(function(){ 
//   return numbers > 10 
// });
// console.log(greaterTen);  // [23, 12, 45, 78, 11, 10.1, 84]




// let students = [
//     {
//       name: 'Alvaro',
//       score: 10,
//     },
//     {
//       name: 'Daniel',
//       score: 16,
//     },
//     {
//       name: 'Alexys',
//       score: 12,
//     },
//     {
//       name: 'Rafa',
//       score: 17,
//     },
//     {
//       name: 'Alejandro',
//       score: 8,
//     },
//     {
//       name: 'Sofia',
//       score: 9,
//     }
//   ]
  
//   let approved = students.filter(student => student.score >= 11);







