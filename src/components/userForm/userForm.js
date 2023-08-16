import React from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import "./userForm.css"

export default function UserForm(props) {

    const [first_name , setFirst_name]=useState(" ");
    const [last_name , setLast_name]=useState(" ");
    const [date_of_Birth , setDate_of_Birth]=useState(" ");
    const [gender , setGender]=useState(" ");
    const [email_id , setEmail_id]=useState(" "); 
    const [phone_number , setPhone_number]=useState(" ");
    const [street , setStreet]=useState(" ");
    const [city , setCity]=useState(" ");
    const [district , setDistrict]=useState(" ");
    const [state , setState]=useState(" ");
    const [pincode , setPincode]=useState(" ");
    const [country , setCountry]=useState(" "); 
    const submitForm=(e)=>{
        e.preventDefault();
         props.submitForm({
          first_name:first_name,
          last_name:last_name,
          Date_of_Birth:date_of_Birth,
          gender:gender,
          email_id:email_id,
          phone_number:phone_number,
          address: {
            street:street,
            city:city,
            district:district,
            state:state,
            pincode:pincode,
            country:country,
          }  
        });
        setFirst_name(" ");
        setLast_name(" ");
        setDate_of_Birth(" ");
        setGender(" ");
        setEmail_id(" ");
        setPhone_number(" ");
        setStreet(" ");
        setCity(" ");
        setDistrict(" ");
        setState(" ");
        setPincode(" ");
        setCountry(" ");
        e.target.reset();

    }    
  return (
    <div className='new-user-form'>
        <h1>New User Registration Form</h1>
        <form onSubmit={(e=>submitForm(e))}>
            <section>
            <h3>User Information</h3>
              <input type='text' placeholder="first name" defaultValue={first_name} onChange={(e)=>setFirst_name(e.target.value)} required/>
                <input type="text" placeholder="last name"  defaultValue={last_name} onChange={(e)=>setLast_name(e.target.value)} required/>
                <input type="date" placeholder="D-O-B" defaultValue={date_of_Birth} style={{width:"100%"}} onChange={(e)=>setDate_of_Birth(e.target.value)} required/>
                <div className='gender-input'>
                <input type="radio" placeholder="Male" defaultValue={gender} onChange={(e)=>setGender(e.target.value)} required/>Male
                <input type="radio" placeholder="Female" defaultValue={gender} onChange={(e)=>setGender(e.target.value)} required/>Female
                </div>
                <input type="text" placeholder="email_id"  defaultValue={email_id} onChange={(e)=>setEmail_id(e.target.value)} required/>
                <input type="number" placeholder="phonenumber" defaultValue={phone_number} onChange={(e)=>setPhone_number(e.target.value)} required/>
            </section>
            <section>
               <h3>Address</h3>
                  <input type="text" placeholder="street" defaultValue={street} onChange={(e)=>setStreet(e.target.value)} required/>
                  <input type="text" placeholder="city"  defaultValue={city} onChange={(e)=>setCity(e.target.value)} required/>
                  <input type="text" placeholder="district" defaultValue={district} onChange={(e)=>setDistrict(e.target.value)} required/>
                  <input type="text" placeholder="state" defaultValue={state} onChange={(e)=>setState(e.target.value)} required/>
                  <input type="number" placeholder="pincode" defaultValue={pincode} onChange={(e)=>setPincode(e.target.value)} required/>
                  <input type="text" placeholder="country" defaultValue={country} onChange={(e)=>setCountry(e.target.value)} required/>        
            </section>
            <div className='userForm-Buttons'>
                <button type='submit' style={{backgroundColor:"#04AA6D"}}>{props.submitBtnText}</button>    
                <button onClick={()=>Navigate('/login')} style={{backgroundColor:"red"}}>Cancel</button>    
            </div>                 
        </form>
    </div>
  )
}
