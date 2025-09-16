const student = {
    name : "Kuntal"
}

// 1st type
// const collageDetails = {
//     roll : 12000221007,
//     __proto__ : student
// }

//2nd type
const collageDetails = {
    roll : 12000221007
} 
collageDetails.__proto__ = student;
console.log(collageDetails.name);