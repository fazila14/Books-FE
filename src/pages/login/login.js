import React from 'react';
import { useNavigate } from 'react-router-dom';
import newUser from "../newUser/newUser"
import "./login.css"

export default function Login() {
  const Navigate = useNavigate()
  return (
    <div className='loginPage'>
        <div className='LoginForm'>
            <form>
                <div className="container">
                    <input type="text" placeholder="Enter Username" name="uname" required/>
                    <input type="password" placeholder="Enter Password" name="psw" required/>        
                    <button className='login-btn' type="submit" onClick={()=>Navigate('/all')}>Login</button>
                    <button className='cancel-btn' type="button" onClick={()=>Navigate('/')} >Cancel</button>
                    <div className='newUser-signin'>
                       <p onClick={()=>Navigate('/newUser')}>new user?Get your Account</p>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
