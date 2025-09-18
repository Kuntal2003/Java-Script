/*
class user{
    constructor(id,pass){
        this.id = id;
        this.pass = pass;
    }
}
const kuntal = new user("Kuntal@1995",123456);
console.log(kuntal.pass); --> By this way we can easyly access the password
*/
// But we need to hide the pass , Below is the example of the
// We are basically tweaking the important value 
class user{
    constructor(id,pass){
        this.id = id;
        this.pass = pass;
    }
    // Rule1. get set method name must be same as variable
    // Rule2. if we use get then also we have to use set
    get pass(){
        return this._pass + " encrypted Pass";
    }
    set pass(value){
        this._pass = value;
    }
}
const kuntal  = new user("Kuntal@1234",5487);
console.log(kuntal.pass)