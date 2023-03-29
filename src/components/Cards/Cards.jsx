import React from 'react';

const Cards = (props) => {

    const {strMealThumb , strMeal , shipping , ratings , quantity , price} = props.food;

    const addToCart = props.addToCart;

    return (
        <div className='border-2 border-gray-500 p-5 '>
            <div className='mb-4'>
           <img className='rounded-xl' src={strMealThumb} alt=""/>
           <h2 className='text-center text-xl font-bold my-4'>{strMeal}</h2>
           <p className='text-xl font-medium mb-3'>Price : ${price}</p>
           <p className='text-xl font-medium mb-3'>Ratings : {ratings} stars</p>
            </div>
           <p onClick={()=>addToCart(props.food)} className='text-center text-white bg-slate-600 p-3 hover:bg-green-900 relative cursor-pointer'>Add To Cart</p>
        </div>
    );
};

export default Cards;