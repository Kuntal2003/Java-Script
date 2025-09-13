const promiseOne = new Promise((resolve,reject)=>{
    const error = true;
    if(!error){
        console.log("Pass");
        resolve({name : "Kuntal", roll : 12000221007});
    }else{
        reject();
    }
})
promiseOne.then((data)=>{
    console.log(data.name);
}).catch(()=>{
    console.log("Error");
})