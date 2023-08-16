import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Getallbooks from '../../components/getAllBooks/getallbooks';
import Filterform from '../../components/filterForm/filterForm';
import "./allBookspage.css"


export default function AllbooksPage() {
    const [books, setBooks]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
      getAllBooks({});
    }, [])
    const getAllBooks=async(bodyData)=>{
        try {
            const response = await axios.post('http://localhost:3001/books/allbooks',bodyData);
            setBooks(response.data.data);
          } 
          catch (error) {
            console.error(error);
          }
        }
          const handleFilterSubmit=(data)=>{
            console.log(data)
            getAllBooks(data)
          }

   return (
    <div className='AllbooksPage'>
            <Filterform handleFilterSubmit={handleFilterSubmit}/>
        <div className='render-books'>
        {books.map((items,ind)=>{
                    return(<Getallbooks  key={ind} allbooks={items}/>)
                })}
        </div> 
        <br/>
        <div className='adding-new-btn'>
            <button className='add-new' onClick={()=>navigate('/addbook')}>Add Your Book</button>
        </div>
    </div>
  )
}
