class user{
    constructor(username){
        this.username = username;
    }
    change(){ // -->This is called method
        return this.username.toUpperCase();
    }
}
const kuntal  = new user("Kuntal");
console.log(kuntal.change());

// using function
function fnUser(username){
    this.username = username;
}
fnUser.prototype.change = function(){
    return this.username.toUpperCase();
}
const kunal = new fnUser("Kunal");
console.log(kunal.change());