import React from 'react';
import "./Community.css"

function Community() {
  return (
    <div className='community pt-lg-5 px-lg-5 pt-3 px-4' style={{backgroundColor:"#f7fdff"}}>
        <p className='py-lg-3 py-2 heading'>
            <i>Your <span className='text-primary'>Hobby</span> , Your 
            <span className='text-purple'> Community</span></i>
        </p>
        <button className='btn btn-primary px-5 mb-lg-5 mb-3'>
            Get Started
        </button>
        <img src="/images/community.svg" alt="community" className='img-fluid pt-lg-5 pt-3' />
    </div>
  )
}

export default Community
