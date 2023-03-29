import React from 'react';

const OrderList = ({food}) => {
    console.log(food)

    let totalPrice = 0;

    for(let obj of food){

        totalPrice = totalPrice + obj.price ;
    }

    return (
        <div className='bg-red-600 text-white rounded-lg p-5 sticky top-0'>
            <h2 className='text-2xl text-center underline'>Order List</h2>
            <p className='text-xl mt-5'>Price : ${totalPrice} </p>

        </div>
    );
};

export default OrderList;