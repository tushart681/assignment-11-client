import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/provider/AuthProvider';


const Login = () => {
  const {login, user} = useContext(AuthContext)
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(err => console.error(err))
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
        <input className="btn btn-primary" type="submit" value="Login" />
            <p className='mt-2'>if you have not account? <Link to={'/signin'}><button className='text-semi-bold btn btn-denger'>Sign in</button></Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;