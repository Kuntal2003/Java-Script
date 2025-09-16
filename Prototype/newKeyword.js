function createUser(username,roll){
    this.username = username;
    this.roll = roll;
}
// const kuntal = createUser("kuntal",7);
// console.log(kuntal);


// Before I am using a arrow function and it will not work because arrow function doesn't contained this
Object.prototype.rollInc = function(){
    this.roll++;
}
// We can create a prototype function in a global function or array or String or etc and also we can pass that same function in direct object through "Object" Keyword . Because all this pass through Object. if anything present in the object then it will be also present in other.
createUser.prototype.printroll = function(){
    console.log(`roll ${this.roll}`);
}
// new keyword helps to combine all method which is created through prototyping method. Without this it will show a error
const kuntal = new createUser("Kuntal",7);
kuntal.rollInc();
kuntal.printroll();