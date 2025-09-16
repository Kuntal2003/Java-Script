let obj = {
    name : "Kuntal",
    roll : 7
}
let arr = [1,2,3,4];
let String = "Kuntal";
Object.prototype.present = function(){
    console.log("This is present to all object");
}
// Array.prototype. ..... by this we can declear a method in all array 




// obj.present();
// arr.present();
String.present();