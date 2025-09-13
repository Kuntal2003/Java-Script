async function call() {
    try{
        const dataInString = await fetch("https://api.github.com/users/Kuntal2003");
        const dataInObject = await dataInString.json();
        console.log(dataInObject);
    }catch{
        console.log('New Error');
    }
}
call();