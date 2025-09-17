class user{
    constructor(username){
        this.username = username;
    }
    // by using this static the inherited class can't access the id method
    static id(){
        return Math.floor(Math.random() * 100)+1;
    }
}
class bank extends user{
    constructor(username,branch){
        super(username);
        this.branch = branch;
    }
    branchPrint(){
        console.log(`Your branch name is ${this.branch}`);
    }
}
const sbi = new bank("kuntal","Bishnupur");
sbi.branchPrint();
console.log(sbi.id());