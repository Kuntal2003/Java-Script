function user(id,pass){
    this.id = id;
    this._pass = pass;
    Object.defineProperty(this,"pass", {
        get : function(){
            return this._pass + "Encripted"
        },
        set : function(value){
            this._pass = value;
        }
    })
}
const kuntal = new user("Kuntal123",15487);
console.log(kuntal.pass);