import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../context/UserContext';

const Login = () => {
const {signIn, signInWithGoogle} = useContext(AuthContext);
const [error, setError] = useState();
  
const handleLogin=event=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password)

    signIn(email, password)
    .then(result =>{
      const user = result.user;
      form.reset();
      setError("")
      
      console.log(user)
    })
    .catch(error =>{
      console.error(error)
    })
  }

  const handleToGoogle=()=>{
    signInWithGoogle()
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error=>{
      setError(error.message)
    })
  }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left text-white">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Don`t have an account? <Link to="/register" className='hover:underline'>Please register</Link></p>
    </div>
    <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control text-white">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control text-white">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6 ">
          <button className="btn bg-yellow-300 text-black text-lg">Login</button>
        </div>
        <p className='text-red-600'>{error}</p>
      </form>
      <div className="divider">OR</div>
      
            <button onClick={handleToGoogle} className="btn btn-wide w-full flex gap-4 bg-gray-600">
                <FaGoogle className=' text-green-700 text-2xl'/>
                <p>Login with google</p>
            </button>
      <div className="divider">OR</div>
      
            <button className="btn btn-wide w-full flex gap-4 bg-gray-600">
                <FaGithub className=' text-green-700 text-2xl'/>
                <p>Login with github</p>
            </button>
    </div>
  </div>
</div>
    );
};

export default Login;