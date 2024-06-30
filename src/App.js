import React from 'react'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Listings from './Components/Listings/Listings'
import AddYourOwn from './Components/AddYourOwn/AddYourOwn'
import Testimonial from './Components/Testimonial/Testimonial'
import Community from './Components/Community/Community'
import Footer from './Components/Footer/Footer'

export default function App() {
  return (
    <div className='app'>
      <Header/>
      <Banner/>
      <Listings/>
      <AddYourOwn/>
      <Testimonial/>
      <Community/>
      <Footer/>
    </div>
  )
}
