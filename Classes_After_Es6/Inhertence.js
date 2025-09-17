class User{
    constructor(username){
        this.username = username;
    }
    upper(){
        return this.username.toUpperCase();
    }
}
class teacher extends User{
    constructor(username,teacherId){
        super(username);
        this.teacherId = teacherId;
    }
    teacherIdPrint(){
        console.log(`Teacher id is ${this.teacherId}`);
    }
}
const kuntal = new teacher("Kuntal",12000221007);
console.log(kuntal.upper());
kuntal.teacherIdPrint();