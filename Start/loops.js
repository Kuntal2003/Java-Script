// const arr = [1,2,3,4,5,6,7,8,9,10];
// for loops
// for(let i = 0;i<10;i++){
//     console.log(arr[i]*arr[i]);
// }

// const { use, useState } = require("react");

// while loops
// let i = 0;
// while(i<arr.length){
//     console.log(arr[i]*arr[i]);
//     i++;
// }

// do while loops
// let i = 0;
// do{
//     console.log(arr[i]*arr[i]);
//     i++;
// }while(i<arr.length);

// for-Of loop --> provide array element inside loop
// for(i of arr){
//     console.log(i*i);
// }

// for-In loop --> provide index number
// for(i in arr){
//     console.log(arr[i]*arr[i]);
// }

const users = [
  { id: 1, name: "Alice", age: 25, isActive: true },
  { id: 2, name: "Bob", age: 30, isActive: false },
  { id: 3, name: "Charlie", age: 22, isActive: true },
  { id: 4, name: "David", age: 28, isActive: false },
  { id: 5, name: "Eva", age: 35, isActive: true }
];
// for each loop --> iterat through all element
// users.forEach((item)=>{
    // console.log(item.name);
// })

// Map method --> return a portion of values through key
// const newArr = users.map((items) => items.age);
// console.log(newArr);

// fiter method -->Based on true false value
// const newArr = users.filter((items)=>{
//     return items.isActive == true;
// })
// const newArr = users.filter(itmes => itmes.isActive);
// console.log(newArr);

// reduce method -->(newVer) Internal variable name, (items) Each object identifier, (0) insitial value of the internal variable
const returnedNewVar = users.reduce((newVer , items)=> (items.age + newVer),0);
console.log(returnedNewVar);
