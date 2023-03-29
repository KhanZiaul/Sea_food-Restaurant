import React from 'react';

const Cards = ({food}) => {
    console.log(food)
    return (
        <div className='border-2 border-gray-500 rounded-xl p-5'>
            <img className='rounded-xl' src={food.strMealThumb} alt="" />
        </div>
    );
};

export default Cards;