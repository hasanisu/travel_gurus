import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import './Header.css'



const Header = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogout=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
  }
  return (
    <div className="sm:w-76 lg:w-full bg-slate-400 sm:w-screen header">
      <nav className="navbar flex gap-1 justify-around ">
        <div className="flex">
          <Link to="/" className="w-20 rounded-full">
            <h2 className='text-xl'>TRAVEL GuRu</h2>
          </Link>
        </div>

        <div className="flex gap-2 text-white">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="text-stone-950">
            <Link
              to="/destination"
              className="btn btn-ghost normal-case text-xl"
            >
              Destination
            </Link>
          </div>
          <div className="text-stone-950">
            <Link to="/blogs" className="btn btn-ghost normal-case text-xl">
              Blogs
            </Link>
          </div>
          <div className="text-stone-950">
            <Link to="/contact-info" className="btn btn-ghost normal-case text-xl">
              Contacts
            </Link>
          </div>

          <div className="w-10 rounded-full">
            {
          user?.uid ?
           
          
          <Link className='flex gap-6'>
          <button onClick={handleLogout} className="btn">Logout</button>
            <img className='rounded-full' src={user.photoURL} />
          <>{user.displayName}</>
          </Link>
          :
          <Link to='/login'><button className="btn bg-yellow-300 text-black text-lg">Login</button></Link>
          
          }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;