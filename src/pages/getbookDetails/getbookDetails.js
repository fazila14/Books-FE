import React, { useState, useEffect } from "react";
import { useNavigate , useParams} from 'react-router-dom';
import axios from "axios";
import Modal from "../../components/modal/modal";
import "./getbookDetails.css"
import BooksFormSubmit from "../../components/booksFormSubmit/booksFormSubmit";

export default function GetBookDetails(){
    const [isOpen, setIsOpen] = useState(false);
    const redirectTo = useNavigate();
    const handleNavigate=(link)=>{
        redirectTo(link)
    }
    const params=useParams();
    // const bookDetails= {
    //     id:"1",
    //     title:"To Kill a Mockingbird",
    //     author:"Harper Lee",
    //     genre:"Fiction",
    //     publicationYear:"1960"
    // }
    const [bookdata, setBookdata]=useState({});
    const submitEditedBook =async(data)=>{
        try {
            await axios.patch(`http://localhost:3001/books/editById/${bookdata._id}`,data);    
            await getBookDetails(bookdata.id); 
            window.alert("your book details is updated");
            setIsOpen(false);      
          } 
          catch (error) {
              console.error(error); 
              window.alert("your book details is not updated. please check");           
          }
        }    
    const getBookDetails=async(id)=>{
        try {
          const response = await axios.get(`http://localhost:3001/books/booksById/${id}`);
          setBookdata(response.data.data);
        } 
        catch (error) {
          console.error(error);
        }
      }
      
    useEffect(()=>{
        getBookDetails(params.id);
    },[])

    return (
    <div className="edit-book">
        <div className="about-maincontainer">
            <div className="form-container">
                <div>
                    <label>Id::</label>
                    <span>{bookdata?._id}</span>
                </div>
                <div>
                    <label>Title::</label>
                    <span>{bookdata?.title}</span>
                </div>
                <div>
                    <label>Author::</label>
                    <span>{bookdata?.author}</span>
                </div>
                <div>
                    <label>Genre::</label>
                    <span>{bookdata?.genre}</span>
                </div>
                <div>
                    <label>PublicationYear::</label>
                    <span>{bookdata?.publicationYear}</span>
                </div>
                <div>
                    <label>Short Description::</label>
                    <span>{bookdata?.shortDescription}</span>
                </div>
            </div>
                <div className="Edit-buttons">
                    <button onClick={()=> redirectTo('/all')}> Back To All Books </button>
                    <button onClick={() => setIsOpen(true)}>Edit</button>
                </div>     
                {isOpen && 
                    <Modal setIsOpen={setIsOpen} >
                    <BooksFormSubmit submitBtnText="Update" editbookData={bookdata} submitForm ={submitEditedBook} />
                    </Modal>
                }

        </div>
    </div>)
}
 
