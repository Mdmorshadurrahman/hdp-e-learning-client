import React, { useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';

const Software = () => {
    const [count, setCount] = useState(0);
    const [selectedItems, setSelectedItems] = useState([]);
    const softwareItems = useLoaderData();
    console.log(softwareItems);
    const buttonClicked = (software) => {
        console.log(software);
        const items = [...selectedItems, software];
        setSelectedItems(items);
        count = count + 1;
        setCount(count);
        alert(count + ' item added');
    }
    return (
        <div className='min-h-screen'>
            <div className='w-4/6 mx-auto'>
                <img src="https://i.ibb.co/37rNg5S/turned-gray-laptop-computer.jpg" alt="software image" />
            </div>
            <div className='w-4/6 mx-auto pl-60'>
                <div className="text-sm breadcrumbs">
                    <ul>
                    <li><NavLink to={'/home'}>Home</NavLink></li>
                    <li><NavLink to={'/'}>Courses</NavLink></li>
                    <li><NavLink to={'software'}>Software</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className='w-4/6 mx-auto pl-60'>
                <h1 className='text-5xl font-light text-black py-10'>Enroll in SOFTWARE based course</h1>
                <p className='text-gray-500 text-lg font-light leading-relaxed mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos tenetur voluptatibus atque distinctio? Dolores ipsa recusandae ex tenetur, adipisci provident! Nostrum in corrupti distinctio repellendus commodi voluptatem, fuga molestiae quos.</p>
            </div>
            <div className='w-4/6 mx-auto flex  mb-10'>
                {
                    softwareItems.map(software =>
                        software.courseType === 'software' &&
                        <><div className=' py-5 px-2 my-10 w-full'>
                            <img className='h-60' src={software.courseImage}></img>
                            <h1 className='text-black font-semibold  py-5 text-xl text-center'>{software.courseName}</h1>
                            <div className='flex flex-col justify-between '>
                                <p className='text-gray-500 h-40'>{software.courseDescription.slice(0, 200)}</p>
                                <h1 className='text-2xl text-yellow-400 text-center pb-5 font-semibold'>{software.coursePrice}</h1>
                                <Link to={`/carts/${software.courseId}`} ><button onClick={() => buttonClicked(software)} className='rounded-none w-full btn btn-outline hover:bg-yellow-400 hover:text-white'>Enroll Now</button>
                                </Link>
                            </div>
                        </div></>

                    )
                }
            </div>
        </div>
    );
};

export default Software;