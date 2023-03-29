function addDb(id){

    let setCarts = checkDb();
    // console.log(setCarts)

    let quantity = setCarts[id] ;
    if(quantity){
        let newquantity = quantity + 1;
        setCarts[id] = newquantity ;
    }
    else{
        setCarts[id] = 1 ;
    }

    localStorage.setItem('Set-Carts',JSON.stringify(setCarts));
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