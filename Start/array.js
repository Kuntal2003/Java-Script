const arr = [0,1,2,3,4];
console.log("A ", arr);

let arr1 = arr.slice(0,3);
console.log(arr1);

console.log("B ", arr);
let arr2 = arr.splice(0,3);
console.log(arr2);
console.log("C ", arr);