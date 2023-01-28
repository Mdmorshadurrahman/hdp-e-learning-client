import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const {login,loginWithGoogle} = useContext(AuthContext);
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        login(email,password)
            .then(result => {
                const user = result.user;
                console.log('registered user',user);
                alert('Congratulation '+ result.user.email+'\nyou have successfully logged IN!');
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleGoogleLogin = () =>{
        loginWithGoogle()
        .then(result =>{
            const user = result.user;
            console.log('with google', user);
            alert('Congratulation '+result.user.email+'\nyou have successfully Logged In with\nGoogle!');
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
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 text-center">Log in yourself and do your stuffs</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm rounded-none shadow-2xl bg-yellow-400">
                        <form onSubmit={handleSubmit} className="card-body">
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
                                <button className="btn btn-outline border-white"><NavLink to={'/'}>Login</NavLink></button>
                            </div>
                            <div className="form-control mt-6">
                            <NavLink to={'/'}><button className="btn btn-outline w-full border-white" onClick={handleGoogleLogin}>Login with<FcGoogle className='ml-2 text-xl'/>oogle</button></NavLink>
                            </div>
                            <div>
                            <h1 className='text-center mt-5'>Don't have any account? <NavLink to={'/register'}><span className='text-md font-bold hover:text-white'>SIGN UP</span></NavLink></h1>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;