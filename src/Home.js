import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../src/images/images.png"


function Home() {

  return (
    <>
    <section id='header' className='d-flex align-items-center change'>
    <div className='container-fluid nav-bg '>
        <div className='row '>
            <div className='col-10 mx-auto '>
                <div className="row ">
              <div className='col-md-6 pt-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
               <h1 >
                   Learn With Me <strong className='navbar-brand'> Pathshala</strong>
               </h1>
               <h4 className='my-3'>
                   I am here to provide you the best link in youtube to learn 
                
               </h4>
               <div className='mt-3'>
                   <NavLink to='/service' className='btn btn-outline-primary'>GetStarted</NavLink>
               </div>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-around'>
                  <img className="size" src={web} alt="home"/>
              </div>
              </div>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Home