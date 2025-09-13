const data = fetch("https://api.github.com/users/Kuntal2003");
data.then((value)=>{
    return value.json();
}).then((re)=>{
    console.log(re);
}).catch(()=>{
    console.log("NewError");
})