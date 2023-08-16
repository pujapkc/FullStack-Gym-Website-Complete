import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';
import './index.css';

function Home() {
    const [auth,setAuth]=useState(false);
    const [message,setmessage]=useState('')
    const [name,setName]=useState('')

    axios.defaults.withCredentials=true;

   

    useEffect(()=>{
      
        axios.get('http://localhost:8081')
      .then(res => {
        if(res.data.Status === "Success"){
          setAuth(true)
          setName(res.data.name)
        
        }else{
          setAuth(false)
          setmessage(res.data.Error)
        }
      })
      .then(err => console.log(err));
       

    },[]);

    const handleDelete=()=>{
      axios.get('http://localhost:8081/logout')
      .then(res=>{
        window.location.reload(true);
      }).catch(err =>console.log(err));
    }


  return (
    <div className="container mt-4">
{
  auth ?
  <div>
 
  <nav class="navbar background">
                <ul class="nav-list">
                    
                    <li><a href="#courses">Home</a></li>
                    <li><a href="#tutorials">About</a></li>
                    <li><a href="#jobs">Contact</a></li>
                    <li><a href='#student'>Services</a></li>
                    <Link  onClick={handleDelete}>Logout</Link>
                </ul>
  
               
            </nav>
  
            <div className="landing-page">
      <div className="overlay">
        <header className="text-center">
          <h1>Welcome to Our Gym</h1>
          <p className="lead">Your Journey to Fitness Begins Here</p>
        </header>

        <section id="about" className="about-section py-5">
          <div className="container">
            <h2>About Us</h2>
            <p>
              We are dedicated to helping you achieve your fitness goals through our state-of-the-art facilities and expert trainers.
            </p>
            <p>Join us and embark on a journey to a healthier lifestyle.</p>
          </div>
        </section>

        <section id="classes" className="classes-section py-5">
          <div className="container">
            <h2>Our Classes</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Cardio Blast</h3>
                    <p className="card-text">
                      A high-energy cardio workout to burn calories and improve cardiovascular fitness.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Strength Training</h3>
                    
                    <p className="card-text">
                      Build muscle and strength with our guided strength training sessions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Yoga and Meditation</h3>
                    <p className="card-text">Find inner peace and flexibility with our yoga and meditation classes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       
      </div>
    </div>
 



    {/* <h3>You are authorised --{ name}</h3>
     */}
  </div>
  :
  <div className='auth'>
    <h3 >{message}</h3>
    <h3>Login Now</h3>
    <Link to="/login" className='btn btn-primary'>Login</Link>
  </div>
}
    </div>
  )
}


export default Home