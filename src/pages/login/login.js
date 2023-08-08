import React from 'react';
import { useNavigate } from 'react-router-dom';
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
                </div>
            </form>
        </div>
    </div>
  )
}
