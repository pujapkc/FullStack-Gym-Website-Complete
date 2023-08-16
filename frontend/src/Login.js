import React from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import './login.css'

function Login() {

  const [values,setvalues]=useState({
    email:'',
    password:''
  })
  const navigate=useNavigate()
  axios.defaults.withCredentials=true;
   const HandleSubmit= (event) =>{
    event.preventDefault();
      axios.post('http://localhost:8081/login',values)
      .then(res => {
        if(res.data.Status === "Success"){
          navigate('/')
        }else{
          alert(res.data.Error);
        }
      })
      .then(err => console.log(err));
   }


  return (
    <div>

    <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid" alt="Sample image"/>
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form onSubmit={HandleSubmit}>
            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p class="lead fw-normal mb-0 me-3">Sign in </p>
             
            </div>
  
            <div class="divider d-flex align-items-center my-4">
             
            </div>
  
            
            <div class="form-outline mb-4">
              <input type="email" id="form3Example3" class="form-control form-control-lg"
                placeholder="Enter a valid email address" onChange={e=>setvalues({...values,email:e.target.value})}   />
              <label class="form-label" for="form3Example3">Email address</label>
            </div>
  
            
            <div class="form-outline mb-3">
              <input type="password" id="form3Example4" class="form-control form-control-lg"
                placeholder="Enter password" onChange={e=>setvalues({...values,password:e.target.value})}   />
              <label class="form-label" for="form3Example4">Password</label>
            </div>
  
            
  
            <div class="text-center text-lg-start mt-4 pt-2">
              <button type="submit" className="btn btn-primary w-100 rounded-0">Login</button>
              <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/register"
                  class="link-danger">Register</Link></p>
            </div>
  
          </form>
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
     
      <div class="text-white mb-3 mb-md-0">
        Copyright © 2023. All rights reserved.
      </div>
    
      <div>
        <a href="#!" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#!" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#!" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="#!" class="text-white">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      </div>
    
  </section>
</div>
  )
}

export default Login