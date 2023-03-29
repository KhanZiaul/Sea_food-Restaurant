import React from 'react';

const Cards = ({food}) => {
    console.log(food)
    return (
        <div>
            <img src={food.strMealThumb} alt="" />
        </div>
    );
};

export default Cards;