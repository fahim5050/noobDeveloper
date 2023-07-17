import React from 'react'
import { useState } from 'react'

function Contact() {
  const[name, setname]=useState('')
  const[email, setemail]=useState('')
  const[message, setmessage]=useState('')
  const[data,setdata]=useState([])
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("object");
    
    const newuser={
      name:name,
      email:email,
      message:message
    }
    setdata([...data, newuser])

    setname("")
    setemail("")
    setmessage("")
  }
  return (
    <section className="contactus" id="contactus">
    <div className='container my-3 text-center'>
    <div className='row'>
    <div className='col-6'>
    <form className='from' onSubmit={submitHandler}>
    <div class="form-group">
    <label htmlFor="exampleFormControlInput1">Name</label>
    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" value={name} onChange={(e)=>setname(e.target.value)}></input>
   </div>
  <div class="form-group">
    <label htmlFor="exampleFormControlInput1">Email</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"value={email} onChange={(e)=>setemail(e.target.value)}></input>
   </div>
   
  <div class="form-group">
    <label htmlFor="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"value={message} onChange={(e)=>setmessage(e.target.value)}></textarea>
  </div>
  <div className='button'>
<button type="submit" className='btn btn-primary ' href="#">Submit</button>

</div>
</form>

    </div>

    </div>

    </div>
    </section>
  )
}

export default Contact