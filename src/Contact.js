import React, { useState } from 'react'

function Contact() {
  const[set,setdata] = useState({
  fullname:"",
  phone:"",
  email:"",
  text:"",
  });
    const formsubmit=(e)=>{
        e.preventDefault();
        
        alert(`My name is ${set.fullname} my phone number is ${set.phone} ,email is${set.email} and i want to say${set.text}`)
        setdata({fullname:"", phone:"",
        email:"",
        text:""});
    }
   
    const inputhandler=(event)=>{
       const {name,value} =event.target;
       setdata((preVal) =>{
           return{
               ...preVal,
               [name]:value,
           };
       });
       
       
    };
  return (
    <>
    <div className='my-4'>
        <h1 className='text-center'>Contact Us</h1>
    </div>
    <div className='container contact_div'>
        <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
                <form onSubmit={formsubmit}>
            <div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name='fullname' value={set.fullname} onChange={inputhandler} placeholder="Enter your full name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone No</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name='phone' value={set.phone} onChange={inputhandler} placeholder="Enter your number"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"  name='email' value={set.email} onChange={inputhandler} placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" classname="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1"  name='text' value={set.text} onChange={inputhandler} rows="3"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-secondary" type="submit">Submit form</button>
  </div>
</form>
            </div>

        </div>
    </div>
    </>
  )
}

export default Contact