const student = {
    name: "Kuntal"
} 
const details = {
    roll : 12000221007
}
// Object.setPrototypeOf(In which property , which obj property);
Object.setPrototypeOf(student,details);
console.log(student.roll);