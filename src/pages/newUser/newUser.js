import React from 'react';
import axios from 'axios';
import UserForm from '../../components/userForm/userForm';
import "./newUser.css"

export default function NewUser() {
    const handleSubmit=async(data)=>{
        console.log(data)
        try {
          const response = await axios.post('http://localhost:3001/user/createUser',data);
          window.alert("your new book is added successfully");
          console.log(response.data.data);
        } 
        catch (error) {
          console.error(error);
          // window.alert("your new book is not added. Please check");
    
        }
    }
    return(
        <div>
            <UserForm submitForm={handleSubmit} submitBtnText="Add person"/>
        </div>
    )
}
