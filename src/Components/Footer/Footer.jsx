import React from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import './Footer.css'

function Footer() {
  return (
    <>
    <div className='footer pt-lg-5 pt-2'>
      <div className="container-fluid px-lg-5 px-sm-3 py-5">
        <div className="row d-flex justify-content-between px-4">
            <div className="col-lg-2 col-md-6 col-12">
                <ul className='list-unstyled' style={{fontFamily:"Poppins"}}>
                    <li className='fw-bold fs-6'>HobbyCue</li>
                    <li>About Us</li>
                    <li>Our Services</li>
                    <li>Work with us</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
                <ul className='list-unstyled' style={{fontFamily:"Poppins"}}>
                    <li className='fw-bold fs-6 accordion-header'>How do I</li>
                    <li>Sign Up</li>
                    <li>Add a Listing</li>
                    <li>Claim Listing</li>
                    <li>Post a Query</li>
                    <li>Add a Blog Post</li>
                    <li>Other Queries</li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
                <ul className='list-unstyled' style={{fontFamily:"Poppins"}}>
                    <li className='fw-bold fs-6'>Quick Links</li>
                    <li>Listing Pages</li>
                    <li>Blog Post</li>
                    <li>Shop / Store</li>
                    <li>Community</li>
                    <li>Sitemap</li>
                </ul>
            </div>
            <div className="col-lg-5 col-md-6 col-12">
                <ul className='list-unstyled' style={{fontFamily:"Poppins"}}>
                    <div className='form-large'>
                        <li className='fw-bold fs-6'>Invite Friends</li>
                        <li>
                        <Form>
                            <InputGroup>
                            <Form.Control
                                placeholder="Search here..."
                                aria-label="Email id"
                                aria-describedby="basic-addon1"
                                style={{background:"#fff",border:"#8064a2 solid 1px",fontSize:"14px"}}
                            />
                            <InputGroup.Text id="basic-addon1" className='bg-purple text-white'
                            style={{border:"#8064a2 solid 1px"}}>
                            Invite
                            </InputGroup.Text>
                            </InputGroup>
                        </Form>
                        </li>
                        <li className='fw-bold fs-6 pt-3'>Social Media</li>
                        <li>
                            <ul className='d-flex list-unstyled'>
                                <li className="me-lg-3 me-sm-2 me-1 cursor-pointer">
                                        <img src="/images/facebookIcon.svg" alt="facebook" />
                                </li>
                                <li className="me-lg-3 me-sm-2 me-1 cursor-pointer">
                                        <img src="/images/twitterIcon.svg" alt="twitter" />
                                </li>
                                <li className="me-lg-3 me-sm-2 me-1 cursor-pointer">
                                        <img src="/images/instagramIcon.svg" alt="insta" />
                                </li>
                                <li className="me-lg-3 me-sm-2 me-1 cursor-pointer">
                                        <img src="/images/PinterestIcon.svg" alt="pinterest" />
                                </li>
                                <li className="me-lg-3 me-sm-2 me-1 cursor-pointer">
                                        <img src="/images/LinkedInIcon.svg" alt="linkedin" />
                                </li>
                                <li className="me-lg-3 me-sm-2 me-1 cursor-pointer">
                                        <img src="/images/youtubeIcon.svg" alt="youtube" />
                                </li>
                                <li className="me-lg-3 me-sm-2 me-1 cursor-pointer">
                                        <img src="/images/telegramIcon.svg" alt="telegram" />
                                </li>
                                <li className="me-lg-3 me-sm-2 me-1 cursor-pointer">
                                        <img src="/images/EmailIcon.svg" alt="email" />
                                </li>
                            </ul>
                        </li>
                    </div>
                    <div className='form-small'>
                        <li className='fw-bold fs-6 pt-3'>Social Media</li>
                        <li>
                            <ul className='d-flex list-unstyled'>
                                <li className="me-lg-3 me-sm-2 me-1 cursor-pointer">
                                        <img src="/images/facebookIcon.svg" alt="facebook" />
                                </li>
                                <li className="me-lg-3 me-sm-2 me-1 cursor-pointer">
                                        <img src="/images/twitterIcon.svg" alt="twitter" />
                                </li>
                                <li className="me-lg-3 me-sm-2 me-1 cursor-pointer">
                                        <img src="/images/instagramIcon.svg" alt="insta" />
                                </li>
                                <li className="me-lg-3 me-sm-2 me-1 cursor-pointer">
                                        <img src="/images/PinterestIcon.svg" alt="pinterest" />
                                </li>
                                <li className="me-lg-3 me-sm-2 me-1 cursor-pointer">
                                        <img src="/images/LinkedInIcon.svg" alt="linkedin" />
                                </li>
                                <li className="me-lg-3 me-sm-2 me-1 cursor-pointer">
                                        <img src="/images/youtubeIcon.svg" alt="youtube" />
                                </li>
                                <li className="me-lg-3 me-sm-2 me-1 cursor-pointer">
                                        <img src="/images/telegramIcon.svg" alt="telegram" />
                                </li>
                                <li className="me-lg-3 me-sm-2 me-1 cursor-pointer">
                                        <img src="/images/EmailIcon.svg" alt="email" />
                                </li>
                            </ul>
                        </li>
                        <li className='fw-bold fs-6'>Invite Friends</li>
                        <li>
                        <Form>
                            <InputGroup>
                            <Form.Control
                                placeholder="Search here..."
                                aria-label="Email id"
                                aria-describedby="basic-addon1"
                                style={{background:"#fff",border:"#8064a2 solid 1px",fontSize:"14px"}}
                            />
                            <InputGroup.Text id="basic-addon1" className='bg-purple text-white'
                            style={{border:"#8064a2 solid 1px"}}>
                            Invite
                            </InputGroup.Text>
                            </InputGroup>
                        </Form>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
      </div>
    </div>
    <div className='text-secondary bg-light text-center p-4'>© Purple Cues Private Limited</div>
    </>
  )
}

export default Footer
