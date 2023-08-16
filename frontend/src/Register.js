import { useState } from 'react'
import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

function Register() {
  const [values,setvalues]=useState({
    name:'',
    email:'',
    password:''
  })
  const navigate=useNavigate()
   const HandleSubmit= (event) =>{
    event.preventDefault();
      axios.post('http://localhost:8081/register',values)
      .then(res => {
        if(res.data.Status === "Success"){
          navigate('/login')
        }else{
          alert("error");
        }
      })
      .then(err => console.log(err));
   }


  return (
    <div>
    <section class="vh-100 bg-white" >
  <div class="container h-100 w-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black rounded" >
          <div class="card-body p-md-7">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4" onSubmit={HandleSubmit}>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control"  onChange={e=>setvalues({...values,name:e.target.value})} />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control"  onChange={e=>setvalues({...values,email:e.target.value})} />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control"  onChange={e=>setvalues({...values,password:e.target.value})}  />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                 

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" class="btn btn-primary w-100 rounded-0">Register</button>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <Link to="/Login"  className='btn btn-primary   rounded-0 text-decoration-none'>Login</Link>
                  </div>
                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  );
}

export default Register