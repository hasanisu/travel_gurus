import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Register = () => {
  const {createUser, varifyEmail} = useContext(AuthContext);
  const [error, setError] = useState();

  const handleRegister=event=>{
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;

    console.log(name, email, password)

    createUser(email, password)
    .then(result =>{
      const user = result.user;
      handleToEmailVarify();
      from.reset();
      console.log(user)
    })
    .catch(error=>{
      setError(error.message)
    })
  }

  const handleToEmailVarify=()=>{
    varifyEmail()
    .then(()=>{})
    .catch(error => console.error(error))
  }
    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold">Register your account!</h1>
            <p className="py-6 text-center">Have an account? <Link to="/login" className='hover:underline'>Please Login here</Link></p>
          </div>
          <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body ">
              <div className="form-control text-white">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name="name" type="text" placeholder="name" className="input input-bordered" required/>
              </div>

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
                <button className="btn bg-yellow-300 text-black text-lg">Register</button>
              </div>
              <p>{error}</p>
            </form>
           
          </div>
        </div>
      </div>
    );
};

export default Register;