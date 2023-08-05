import React from 'react';
import "./login.css"

export default function Login() {
  return (
    <div className='LoginForm'>
        <form>
            <div className="container">
                <input type="text" placeholder="Enter Username" name="uname" required/>
                <input type="password" placeholder="Enter Password" name="psw" required/>        
                <button className='login-btn' type="submit">Login</button>
                <button className='cancel-btn' type="button" >Cancel</button>
            </div>
        </form>
    </div>
  )
}
