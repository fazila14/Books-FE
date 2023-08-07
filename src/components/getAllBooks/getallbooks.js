import React from 'react';
import "./getallbooks.css";

export default function Getallbooks({allbooks}) {
  return (
    <div className='books-card'>
        <div className="card">
            <img  src ="https://tse2.mm.bing.net/th?id=OIP.NGofr7d8y6lcAUn2SeXXPgHaLZ&pid=Api&P=0&h=180" alt="Avatar" />
            <div className="container-allbooks">
                <h4><b>{allbooks.title}</b></h4> 
                <p>{allbooks.author}</p> 
            </div>
        </div>
    </div>
  )
}
