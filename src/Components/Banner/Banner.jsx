import React from 'react';
import './Banner.css'
import BannerForm from './BannerForm';

function Banner() {
  return (
    <div className='banner' style={{backgroundColor:"#f7f5f9"}}>
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-7 col-md-6 col-12 pt-lg-4 pt-2 ps-lg-5 px-4">
                <p className='py-lg-3 py-2 heading'>
                    <i>Explore your <span className='text-primary'>hobby</span> or 
                    <span className='text-purple'> passion</span></i></p>
                <p className='py-lg-3 py-2'>
                    Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.
                    <span className='responsive'>
                    Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…<br/><br />
                    If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
                    </span>
                </p>
            </div>
            <div className="col-lg-5 col-md-6 col-12 pt-lg-5 pt-2 pe-lg-5">
                <div className="bannerForm px-4">
                    <BannerForm/>
                </div>
            </div>
        </div>
        <div className="row">
                    <div className="col-12">
                    <img src="/images/bannerPart1.svg" alt="banner1" className='img-fluid banner-img' />
                    </div>
        </div>
        
      </div>
    </div>
  )
}

export default Banner
