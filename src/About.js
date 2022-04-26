import React from 'react'
import { NavLink } from 'react-router-dom'
import bookss from "../src/images/booked.png"

function About() {
  return (
    <>
    <section id='header' className='d-flex align-items-center change'>
    <div className='container-fluid nav-bg '>
        <div className='row '>
            <div className='col-10 mx-auto '>
                <div className="row ">
              <div className='col-md-6 pt-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
               <h1 >
                   Welcome to About Page
               </h1>
               <h4 className='my-3'>
                   Welcome to PATHSHALA. you can get the best links here from youtube which will help you to crack multiple exams and will help you to get your dream job.  
                
               </h4>
               <h5>We are aslo looking  to start a youtube channel for this platform...  </h5>
               
               <div className='mt-3'>
                   <h4> YOUTUBE..  </h4>
                   <NavLink to='/service' className='btn btn-outline-primary'>Comming soon..</NavLink>
               </div>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-around'>
                  <img className="size" src={bookss} alt="home"/>
              </div>
              </div>
            </div>
        </div>
    </div>
    </section>
</>
  )
}

export default About;