import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards'
import './Fetch.css'

const FetchData = () => {

    const [foods,setFoods] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(datas => setFoods(datas))
    },[])
    // console.log(foods)

    return (
        <div className='cards mt-5 p-5'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
              foods.map((food) => <Cards key={food.idMeal} food={food}></Cards>)

            }
            </div>
            <div>
                <h2 className='text-2xl text-center underline'>Order List</h2>
            </div>
        </div>
    );
};

export default FetchData;