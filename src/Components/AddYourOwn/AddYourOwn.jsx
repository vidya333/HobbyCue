import React from 'react'

function AddYourOwn() {
  return (
    <div className='addYourOwn p-lg-5 p-md-3 p-2' style={{backgroundColor:"#f7fdff"}}>
      <div className="container-fluid">
        <div className="addbox bg-white border rounded p-lg-5 p-3 py-5 my-5">
            <h3><i className="fa-solid fa-circle-plus fs-2 text-blue me-3"></i>
                Add Your Own</h3>
            <p style={{fontFamily:"Poppins"}} className='py-lg-3 py-2'>Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page..</p>
            <button className='btn btn-outline-primary text-purple px-5 list-btn'>Add New</button>
        </div>
      </div>
    </div>
  )
}

export default AddYourOwn
