import React from 'react';
import './Listings.css'

function Listings() {
  const data = [
    {
        icon : "fa-solid fa-users fs-2",
        title : "People",
        description : 
        "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator. ",
        color:"text-purple",
        button : "Connect",
        border : "border-purple"
    },
    {
        icon : "fa-solid fa-location-dot fs-2",
        title : "Place",
        description : 
        "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
        color:"text-green",
        button : "Meet Up",
        border : "border-green"
    },
    {
        icon : "fa-solid fa-cart-shopping fs-2",
        title : "Product",
        description : 
        "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members. ",
        color:"text-red",
        button : "Get It",
        border : "border-red"
    },
    {
        icon : "fa-solid fa-calendar-check fs-2",
        title : "Program",
        description : 
        "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
        color:"text-blue",
        button : "Attend",
        border : "border-blue"
    }
  ]

  function Column({data}){
    return(
        <div className="col-md-6 col-12">
            <div className="list-box mx-1 my-2 pt-lg-3" >
                <div className={data.border}>
                    <div className='d-flex justify-content-start my-lg-2'>
                        <span className={data.color}>
                          <i className={data.icon}></i>
                          </span>
                        <h3 className='ms-3'>{data.title}</h3>
                    </div>
                    <p className='list-text my-lg-3'>{data.description}</p>
                    <button className='btn btn-outline-primary text-purple px-4 mt-lg-3 mt-2 list-btn'>{data.button}</button>
                </div>
            </div>
        </div>
    )
  }

  return (
    <div className='listings container py-5'>
      <div className="row">

        {data.map((data,index)=>{
            return <Column data={data} key={index}/>
        })}
 
      </div>
    </div>
  )
}

export default Listings
