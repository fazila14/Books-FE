import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./allBookspage.css"
import Getallbooks from '../../components/getAllBooks/getallbooks';


export default function AllbooksPage() {
    const [books, setBooks]=useState([]);
    const navigate=useNavigate();
    const getAllBooks=async()=>{
        try {
            const response = await axios.get('http://localhost:3001/books/allBooks');
            setBooks(response.data.data);
          } 
          catch (error) {
            console.error(error);
          }
        }
        useEffect(()=>{
            getAllBooks();
          }, [])

   return (
    <div className='AllbooksPage'>
        <div className='render-books'>
        {books.map((items,ind)=>{
                    return(<Getallbooks  key={ind} allbooks={items}/>)
                })}
        </div> 
        <br/>
        <div className='adding-new-btn'>
            <button className='add-new' onClick={()=>navigate('/addnew-book')}>Add Your Book</button>
        </div>
    </div>
  )
}
