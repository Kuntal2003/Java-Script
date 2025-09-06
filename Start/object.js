let obj = {
    name : "Kuntal",
    age : 22,
    fun2 : function(){
        console.log("fun");
    }
}
console.log(obj.age)
obj.fun1 = function(){
    console.log("Hey " + this.name);
}
console.log(obj);
obj.fun1();
obj.fun2();