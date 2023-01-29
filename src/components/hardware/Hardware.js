import React, { useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';

const Hardware = () => {
    const [count, setCount] = useState(0);
    const [selectedItems, setSelectedItems] = useState([]);
    const hardwareItems = useLoaderData();
    console.log(hardwareItems);
    const buttonClicked = (hardware) => {
        console.log(hardware);
        const items = [...selectedItems, hardware];
        setSelectedItems(items);
        count = count + 1;
        setCount(count);
        alert(count + ' item added');
    }
    return (
        <div className='min-h-screen'>
            <div className='w-4/6 mx-auto'>
                <img src="https://i.ibb.co/NrTR5PL/technician-repairing-computer-computer-hardware-repairing-upgrade-technology.jpg" alt="hardware image" />
            </div>
            <div className='w-4/6 mx-auto pl-60'>
                <div className="text-sm breadcrumbs">
                    <ul>
                    <li><NavLink to={'/home'}>Home</NavLink></li>
                    <li><NavLink to={'/'}>Courses</NavLink></li>
                    <li><NavLink to={'hardware'}>Hardware</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className='w-4/6 mx-auto pl-60'>
                <h1 className='text-5xl font-light text-black py-10'>Enroll in HARDWARE based course</h1>
                <p className='text-gray-500 text-lg font-light leading-relaxed mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos tenetur voluptatibus atque distinctio? Dolores ipsa recusandae ex tenetur, adipisci provident! Nostrum in corrupti distinctio repellendus commodi voluptatem, fuga molestiae quos.</p>
            </div>
            <div className='w-4/6 mx-auto flex  mb-10'>
                {
                    hardwareItems.map(hardware =>
                        hardware.courseType === 'hardware' &&
                        <>
                            <div className=' py-5 px-2 my-10 w-full'>
                                <img className='h-60' src={hardware.courseImage}></img>
                                <h1 className='text-black font-semibold  py-5 h-24 text-xl text-center'>{hardware.courseName}</h1>
                                <div className='flex flex-col justify-between '>
                                    <p className='text-gray-500 h-40 pb-5'>{hardware.courseDescription.slice(0, 200)}...</p>
                                    <h1 className='text-2xl text-yellow-400 text-center pb-5 font-semibold'>{hardware.coursePrice}</h1>
                                    <Link to={`/carts/${hardware.courseId}`} ><button onClick={() => buttonClicked(hardware)} className=' rounded-none w-full btn btn-outline hover:bg-yellow-400 hover:text-white'>Enroll Now</button>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>

        </div>
    );
};

export default Hardware;