import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./defaultpage.css";

export default function Defaultpage () {
    const Navigate = useNavigate()
  return (
    <div className='defaultpage'>
        <div className='bg-img'>
            <div className='header-content'>
                <h1>Welcome To Our Books Collection</h1>
                <div className='proceed-btn'>                
                   <button onClick={()=>Navigate('/login')}>Be a part of us</button>
                </div>
            </div>
        </div>
    </div>
  )
}
