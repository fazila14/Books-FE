import React from 'react';
import axios from 'axios';
import "./addbooks.css";
import BooksFormSubmit from '../../components/booksFormSubmit/booksFormSubmit';

export default function AddBook() {
  const handleSubmit=async(data)=>{
    console.log(data)
    try {
      const response = await axios.post('http://localhost:3001/books/create',data);
      window.alert("your new book is added successfully");
      console.log(response.data.data);
    } 
    catch (error) {
      console.error(error);
      window.alert("your new book is not added. Please check");

    }
  }
 return(
  <div className='booksAdding'>
     <BooksFormSubmit submitForm={handleSubmit} submitBtnText="Add Book"/>
  </div>
  );
}
