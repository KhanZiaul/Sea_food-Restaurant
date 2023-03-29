function addDb(id){

    let setCarts = checkDb();
    console.log(setCarts)
}

function checkDb(id){

    let setCarts = {} ;

    let getDataFromLocalStorage = localStorage.getItem('Set-Carts');

    if(getDataFromLocalStorage){

        setCarts = JSON.parse(getDataFromLocalStorage);
    }
    return setCarts ;
}
export{addDb} ;