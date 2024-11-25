import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
const Navbar = () => {
    const {user, logOut}=useContext(AuthContext)
    const handleLogOut =()=>{
      logOut()
      .then(()=>{})
      .catch(err=>console.log(err.message))
    }
    const navLink= <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/services'>Services</NavLink></li>
    {
      user? <>
      <li><NavLink to='/booking'>My Booking</NavLink></li>
      <li><button onClick={handleLogOut}>Log Out</button></li>
      </> : <li><NavLink to='/signin'>Sign In</NavLink></li>
    }
   
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
           {navLink} 
          </ul>
        </div>
        <Link to='/'>
        <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navLink
          }
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-warning">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
