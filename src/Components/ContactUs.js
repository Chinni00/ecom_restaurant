import React, { useState } from 'react'
import Navbar from './Navbar';

const ContactUs = () => {
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    phone:''
  })


  const handleInput=(event)=>{
    
  const {name,value} = event.target;
  
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));

  }
  const formHandler= async(event)=>{
    event.preventDefault()
    const response = await fetch('https://ecom-contactus-default-rtdb.firebaseio.com/contact.json',{
      method:'POST',
      body:JSON.stringify(formData),
      headers:{
        'Content-Type':'application/json'
      }
    });
     const data = await response.json()


  }

  return (
    <div>
      <Navbar />
      <form onSubmit={formHandler}>
        <div>
          <label htmlFor='name'>Name</label>
          <input id='name'  placeholder='enter name' name='name' onChange={handleInput} />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input id='email'  placeholder='enter mail' name='email' type='email' onChange={handleInput} />
        </div>
        <div>
          <label htmlFor='phone'>Phone</label>
          <input id='phone'  placeholder='enter phone no' name='phone' onChange={handleInput} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactUs