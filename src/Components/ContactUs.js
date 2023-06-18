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
    
     setFormData({
      name:'',
    email:'',
    phone:''
     })

  }

  return (
    <div>
      <Navbar />
      <h1 className='text-center mt-5'>Contact Us</h1>
      <form className=' m-5 border border-dark p-5 rounded' onSubmit={formHandler}>
      <div class="form-group">
    <label htmlFor="name">Name</label>
    <input  class="form-control" id="name" name='name' value={formData.name} placeholder="Enter name" onChange={handleInput} />
    
  </div>
  <div class="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" name='email' class="form-control" id="exampleInputEmail1" value={formData.email} aria-describedby="emailHelp" placeholder="Enter email" onChange={handleInput} />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Phone no</label>
    <input  name='phone' class="form-control" id="exampleInputPassword1" value={formData.phone} placeholder="phone" onChange={handleInput} />
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default ContactUs