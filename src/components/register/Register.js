import React from 'react';
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const {register,loginWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstname.value;
        const lastName = form.lastname.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password,firstName,lastName);

        register(email,password,lastName)
            .then(result => {
                const user = result.user;
                console.log('registered user',user);
                alert('Congratulation '+result.user.email+'\nyou have successfully registered!');
                navigate('/login')
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleGoogleRegister = () =>{
        loginWithGoogle()
        .then(result =>{
            const user = result.user;
            console.log('with google', user);
            alert('Congratulation '+result.user.email+'\nyou have successfully registered!');
            navigate('/')
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen w-4/6 mx-auto z-10 mb-10">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
                        <p className="py-6 text-center">Sign yourself up & be a member</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm rounded-none shadow-2xl bg-yellow-400">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div  className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" placeholder="firstname" name='firstname' className="input input-bordered" required />
                            </div>
                            <div  className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" placeholder="lastname" name='lastname' className="input input-bordered" required />
                            </div>
                            <div  className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline border-white">Register</button>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline border-white" onClick={handleGoogleRegister}>Register with <FcGoogle className='ml-2 text-xl'/>oogle</button>
                            </div>
                            <div>
                            <h1 className='text-center mt-5'>Already have an account? <NavLink to={'/login'}><span className='text-md font-bold hover:text-white'>LOG IN</span></NavLink></h1>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;