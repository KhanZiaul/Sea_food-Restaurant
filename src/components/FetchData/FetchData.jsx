import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards'
import OrderList from '../OrderList/OrderList';
import { addDb, checkDb } from '../Utilities/storage';
import './Fetch.css'

const FetchData = () => {

    const [foods,setFoods] = useState([]);
    const [food,setFood] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(datas => setFoods(datas))
    },[])
    // console.log(foods)

    useEffect(()=>{

        let saveCart = [] ;
        let getCart = checkDb();
        for(let idMeal in getCart){     
        let existsData = foods.find(fd => fd.idMeal === idMeal)
        if(existsData){
          let newQuantity = getCart[idMeal];
          existsData.quantity = newQuantity ;
          saveCart.push(existsData)
        }
        }
        setFood(saveCart);
    },[foods])

    function addToCart(singleFood){

        // let newCart = [...food,singleFood]
        let newCart = [];
        let exixtsId = food.find(fd => fd.idMeal === singleFood.idMeal);
        if(!exixtsId){
            singleFood.quantity = 1 ;
            newCart =[...food,singleFood] ;
        }
        else{
            exixtsId.quantity = exixtsId.quantity + 1 ;
            let remaining = food.filter(fd => fd.idMeal !== exixtsId.idMeal)
            newCart = [...remaining,exixtsId]
        }
        setFood(newCart) ;
        addDb(singleFood.idMeal)
    }

    return (
        <div className='cards mt-5 p-5'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
              foods.map((food) => <Cards 
              key={food.idMeal}
              food={food}
              addToCart={addToCart}
              ></Cards>)
            }
            </div>
            <div>
                <OrderList food={food}></OrderList>
            </div>
        </div>
    );
};

export default FetchData;