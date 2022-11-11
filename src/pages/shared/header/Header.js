import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/provider/AuthProvider';
import logo from '../../../images/images (1).png'
import Banner from '../../home/banner/Banner';

const Header = () => {
  const { user, logOut, googleSignIn } = useContext(AuthContext)
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(res => {
      const user = res.user;
      console.log(user)
    })
  }
  const HandleLogOut = () => {
    logOut()
      .then()
      .catch(err => console.error(err))
  }

  return (
    <div className="navbar mb-12 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Mobile Service</a></li>
            <li><a>Bike Service</a></li>
            <li><a>Freez Service</a></li>
            <li><a>Computer Service</a></li>
            <li><a>Leptop Service</a></li>
            <li><a>Car Service</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center flex-col gap-2 w-3/4 h-3/4">
        {/* if click this logo than go to home */}
        <Link to={'/'} className="btn btn-ghost">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end gap-2">
      <Link to={'/blog'}><p>Blogs</p></Link>
        {
          user?.email ?
            <>
              <Link to={'/myreview'}><p>My Review</p></Link>
              <Link to={'/addservice'}><p>Add Service</p></Link>
              <Link><button onClick={HandleLogOut} className="btn btn-outline btn-error">Log Out</button></Link>
            </>
            :
            <>
            <Link to={'/login'}><button className="btn btn-outline">Log In</button></Link>
            <button onClick={handleGoogleSignIn} className="btn btn-outline">Login By Google</button>
            </>
        }
      </div>
    </div>
  );
};

export default Header;