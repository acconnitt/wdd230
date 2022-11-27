// JavaScript REDUCE

// const num = [1,2,3,4,5,6,7,8,9];

// // acc is the accumulator 
// const res = num.reduce( (acc, item) => {
//     return acc = acc + item;
// }, 10)

// console.log(res);



// const strings = ["Hello", "everyone", "this", "is", "WDD", "230"];

// const res2 = strings.reduce( (acc, item) =>  acc += " " + item, "Welcome," )

// console.log(res2);




// const objs = [
//     {name: "Smith", age: 30},

//     {name: "Jones", age: 70},
     
//     {name: "Perez", age: 40},

//     {name: "Sanchez", age: 60}
// ]

// const res3 = objs.reduce((acc, item) => acc += item.age, 0);

// console.log(res3);



const num = [1,2,3,4,5,6,7,8,9];

// acc is the accumulator 
const res = num.reduce( (acc, item) => Math.max(acc, item));

console.log(res);