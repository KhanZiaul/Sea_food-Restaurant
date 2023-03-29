import React from 'react';

const OrderList = ({food}) => {
   // console.log(food)

    let totalPrice = 0;
    let shipping = 0;
    let grandTotal = 0;
    let quantity = 0 ;
    for(let obj of food){

        totalPrice = totalPrice + obj.price * obj.quantity;
        shipping = shipping + obj.shipping * obj.quantity;
        quantity = quantity + obj.quantity ;
    }

    let tax = ( totalPrice * 7 ) / 100 ; 
    grandTotal = totalPrice + shipping + tax; 

    return (
        <div className='bg-slate-600 text-white rounded-lg p-5 sticky top-0'>
            <h2 className='text-2xl text-center underline'>Order List</h2>
            <p className='text-xl mt-5'>Items : {quantity} </p>
            <p className='text-xl mt-5'>Price : ${totalPrice} </p>
            <p className='text-xl my-3'>Shipping : ${shipping} </p>
            <p className='text-xl my-3'>Tax : ${tax.toFixed(2)} </p>
            <p className='text-xl my-3 text-center bg-slate-800 p-2 rounded-xl'>Grand Total : ${grandTotal.toFixed(2)} </p>

        </div>
    );
};

export default OrderList;