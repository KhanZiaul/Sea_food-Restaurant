import React from 'react';

const Cards = ({food}) => {
    console.log(food)
    const {strMealThumb , strMeal , shipping , ratings , quantity , price} = food;
    return (
        <div className='border-2 border-gray-500 p-5 '>
            <div className='mb-4'>
           <img className='rounded-xl' src={food.strMealThumb} alt=""/>
           <h2 className='text-center text-xl font-bold my-4'>{strMeal}</h2>
           <p className='text-xl font-medium mb-3'>Price : ${price}</p>
            </div>
           <div>
           <p className='text-center text-white bg-red-500 p-3 hover:bg-red-900 relative'>Add To Cart</p>
           </div>
        </div>
    );
};

export default Cards;