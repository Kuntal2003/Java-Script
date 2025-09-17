/*
function person(username){
    this.username = username;
}
function moredetails(username,phoneno,pin){
    person(username);
    this.phoneno = phoneno;
    this.pin = pin;
}
 */
// const kuntal =  moredetails("Kuntal",702987,722122); --> this is showing undifine
// const kuntal =  new moredetails("Kuntal",702987,722122); -->  this only set the phone and pin because in fn moredetails() the current context not holding the username value, and by using "new" we are wapping the all value


function person(username){
    this.username = username;
}
function moredetails(username,phoneno,pin){
    // person.call(username); --> here we use call but not passing the cuurrent this context to the person method.
    person.call(this,username); //--> this is working because here the reference of the person() hold using "this". This is basically holding the person() function context value in the moredetails() fuction 
    this.phoneno = phoneno;
    this.pin = pin;
}
   
// This class is a syntactic suger of the above function
class person {
    constructor(username) {
        this.username = username;
    }
}
class moredetails {
    constructor(username, phoneno, pin) {
        person.call(this, username);
        this.phoneno = phoneno;
        this.pin = pin;
    }
}

const kuntal =  new moredetails("Kuntal",702987,722122);
console.log(kuntal);