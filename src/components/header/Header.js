import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdShoppingCart } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
    const {user,logout} = useContext(AuthContext);

    const handleLogout = () =>{
        logout()
        .then(
            alert('You are Logged out now!')
        )
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        // <div>
        <div className=' sticky top-0 w-full bg-white z-10 '>
            <div className="navbar flex font-medium text-sm max-lg:w-4/6 justify-between lg:w-4/6 lg:mx-auto max-lg:ml-auto py-8">
                <div className="hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        <li className='hover:border-b-4 hover:border-yellow-400'><NavLink className='bg-white text-black'>COURSES</NavLink>
                            <ul className="p-2 -ml-2">
                                <li><NavLink className=' hover:bg-yellow-400  bg-white text-black' to={'/software'}>Software</NavLink></li>
                                <li><NavLink className='hover:bg-yellow-400  bg-white text-black' to={'/hardware'}>Hardware</NavLink></li>
                            </ul>
                        </li>
                        <li tabIndex={0} className='hover:border-b-4 hover:border-yellow-400'>
                            <NavLink className='bg-white text-black'>
                                CART<MdShoppingCart className='text-xl'></MdShoppingCart>
                            </NavLink>
                        </li>
                        <li className='hover:border-b-4 hover:border-yellow-400'><NavLink className='bg-white text-black' to={'/about'}>ABOUT</NavLink></li>
                    </ul>
                </div>
                <div >
                    <NavLink to={'/home'} className='btn btn-ghost hover:bg-white'><img src="https://i.ibb.co/4YyYdVr/logo-hdp.png" alt="home icon" /></NavLink>
                    {user?.email?<div className='bg-yellow-400 p-2 text-white dropdown dropdown-hover dropdown-bottom'><ul tabIndex={0} className="dropdown-content cursor-pointer p-2 text-black hover:text-white shadow rounded-none -ml-2 w-full hover:bg-yellow-400"><li><button onClick={handleLogout}><NavLink to={'/login'}>Logout</NavLink></button></li>
                        </ul>
                        {user.email.toUpperCase()}</div>:<> <NavLink to={'/login'} className='hover:bg-yellow-400 p-2 hover:text-white'>Login</NavLink>
                    <NavLink to={'/register'} className='hover:bg-yellow-400 p-2 hover:text-white'>SignUp</NavLink></>
                    }
                    
                    

                </div>


                <div className=" dropdown lg:hidden ">
                    <label tabIndex={0} className="btn btn-ghost">
                        <AiOutlineMenu className='text-3xl' />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='hover:border-b-4 hover:border-yellow-400'><NavLink className='bg-white text-black'>COURSES</NavLink>
                            <ul className="p-2">
                                <li><NavLink className='hover:bg-yellow-400 bg-white text-black' to={'/software'}>Software</NavLink></li>
                                <li><NavLink className='hover:bg-yellow-400 bg-white text-black' to={'/hardware'}>Hardware</NavLink></li>
                            </ul>
                        </li>
                        <li className='hover:border-b-4 hover:border-yellow-400' tabIndex={0}>
                            <NavLink className='bg-white text-black justify-between' >
                                CART<MdShoppingCart></MdShoppingCart>
                            </NavLink>
                        </li>
                        <li className='hover:border-b-4 hover:border-yellow-400'><NavLink className='bg-white text-black' to={'/about'}>ABOUT</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;