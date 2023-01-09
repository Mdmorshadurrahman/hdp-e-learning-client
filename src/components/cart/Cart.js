import React, { useEffect, useState } from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';

const Cart = () => {
    let choosenData = useLoaderData();
    const [emptyObject, setEmptyObject] = useState(choosenData);
    const [count, setCount] = useState(1)

    console.log(emptyObject);
    // useEffect(() => {
    //     if (orderCmplt) {
    //         const btn = document.getElementById('orderBtn');
    //         btn.innerHTML = '';
    //     }
    // }, []);
    const orderBtn = () => {
        alert('order succefully completed');
        setCount(0);
        setEmptyObject({});
    }
    return (
        <div className='min-h-screen'>
            <div className='w-4/6 mx-auto'>
                <img src="https://img.freepik.com/free-photo/box-market-electronic-ordering-shop-basket_1421-567.jpg?w=1060&t=st=1673289191~exp=1673289791~hmac=0edf4770f38ed89d2c1596fbff2eb353146e080c9355025a350b5e146efa2256" alt="" />
            </div>
            <div className='w-4/6 mx-auto pl-60'>
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Carts</a></li>
                    </ul>
                </div>
            </div>
            <div className='w-4/6 mx-auto my-10 pl-40'>
                <h1 className='text-black font-semibold text-4xl'>Complete your order here</h1>
            </div>
            <div className='flex w-4/6 mx-auto my-28'>
                {
                    <div className=' w-8/12 p-5'>
                        <div className=''>
                            <img src={emptyObject.courseImage} alt="" />
                        </div>
                        <div>
                            <h1 className='text-black font-semibold  py-5 text-xl text-center'>
                                {emptyObject.courseName}
                            </h1>
                            <h1 className='text-2xl text-yellow-400 text-center pb-5 font-semibold'>{emptyObject.coursePrice}</h1>
                        </div>
                    </div>
                }
                {
                    <div className=' w-4/12 p-5 h-80 flex flex-col justify-between'>
                        <div className='text-lg border-2 border-yellow-400 p-5 flex justify-between'>
                            <h1>
                                Total Item:
                            </h1>
                            <h1 className='font-semibold'>
                                {count}
                            </h1>
                        </div>
                        <div className='text-lg border-2 border-yellow-400 p-5 flex justify-between'>
                            <h1>
                                Total Price:
                            </h1>
                            <h1 className='font-semibold'>
                                {emptyObject.coursePrice}
                            </h1>
                        </div>
                        <div id='orderBtn'>
                            <button onClick={orderBtn} className='rounded-none w-full btn btn-outline hover:bg-yellow-400 hover:text-white'>Order Now</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Cart;