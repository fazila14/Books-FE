import React from 'react';
import "./booksFormSubmit.css"

export default function BooksFormSubmit(props) {
  console.log(props)
  console.log("props not working")
  return (
    <div className='bookform'>
        <div className='bkg-img'>
            <form>
                <div className='form-inputs'>
                    <input type='text' placeholder='title' required/>
                    <input type='text' placeholder='author'required/>
                    <input type='text' placeholder='genre'required/>
                    <input type='number' placeholder='PublicationYear'required/>
                    <textarea  placeholder='short Description of your Book'/>
                    <button className='newformSubmit-btn' type='submit'>{props.submitBtnText}</button>
                    <button className='back-btn' type='submit' style={{backgroundColor:"red"}}>Back</button>

                </div>
            </form>
        </div>
    </div>
  )
}
