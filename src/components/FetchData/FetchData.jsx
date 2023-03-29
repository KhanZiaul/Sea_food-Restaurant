import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards'
import OrderList from '../OrderList/OrderList';
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

    function addToCart(singleFood){
        let newCart = [...food,singleFood]
        setFood(newCart)
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