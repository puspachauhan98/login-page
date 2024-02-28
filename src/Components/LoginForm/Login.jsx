import React from 'react'
import './Login.css';
import { FaUser, FaLock} from "react-icons/fa";

 const Login=()=>{
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>Login</h1>
            
            <div className="input-box">
                <input type='text' placeholder='username' required/>
                <FaUser className='icon'/>
                </div>
                <br>
                </br>
                <div className="input-box">
                <input type='text' placeholder='Password' required/>
                <FaLock className='icon'/>
                </div>

                <div className="remember-forgot">
                <label><input type='checkbox' /> Remember me</label>
                
                <a href="#"> Forgot password?</a>
                <FaLock className='icon'/>
                </div>
                <button type='submit'>Login</button>

                <div className='register-link'>
                   <p> Don't have an account 
                   <a href='#'>Register</a></p>
                </div>



            
        </form>
      
    </div>
  )
}

export default Login;
