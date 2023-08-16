import { useEffect, useState } from "react";
import React from 'react';
import "./booksFormSubmit.css"

export default function BooksFormSubmit(props) {
  const [title , setTitle]=useState(" ");
  const [author , setAuthor]=useState(" ");
  const [genre , setGenre]=useState(" ");
  const [publicationYear , setPublicationYear]=useState(" ");
  const [shortDescription , setShortDescription]=useState(" ");

  const submitForm=(e)=>{
    e.preventDefault();
     props.submitForm({
      title:title,
      author:author,
      genre:genre,
      publicationYear:publicationYear,
      shortDescription:shortDescription,
    })
    // console.log(title)
      setTitle("");
      setAuthor("");
      setGenre("");
      setPublicationYear("");
      setShortDescription("");
      e.target.reset();
  }
  useEffect(()=>{
    if(props.editbookData){
      setTitle(props.editbookData.title)
      setAuthor(props.editbookData.author)
      setGenre(props.editbookData.genre)
      setPublicationYear(props.editbookData.publicationYear)
      setShortDescription(props.editbookData.shortDescription)
      console.log(props.editbookData)
    }
    // console.log(setTitle)

  },[]);    
  return (
    <div className='bookform'>
        <div className='bkg-img'>
            <form  onSubmit={(e)=>submitForm(e)}>
                <div className='form-inputs'>
                    <input type='text' placeholder='title'  onChange={(e)=>setTitle(e.target.value) } required/>
                    <input type='text' placeholder='author' onChange={(e)=>setAuthor(e.target.value)} required/>
                    <input type='text' placeholder='genre' onChange={(e)=>setGenre(e.target.value)} required/>
                    <input type='number' placeholder='PublicationYear' onChange={(e)=>setPublicationYear(e.target.value)} required/>
                    <textarea  placeholder='short Description of your Book'  onChange={(e)=>setShortDescription(e.target.value)}required/>
                    <button className='newformSubmit-btn' type='submit'>{props.submitBtnText}</button>
                    <button className='back-btn' type='submit' style={{backgroundColor:"red"}}>Back</button>

                </div>
            </form>
        </div>
    </div>
  )
}
