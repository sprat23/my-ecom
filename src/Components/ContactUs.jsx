import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Breadcrum from "./Partials/Breadcrum"

import formValidator from "./FormValidators/formValidator"
import { createContactUs } from "../Redux/Actioncreators/ContactUsActionCreators"

const defaultValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
}
export default function ContactUs() {
  let [data, setData] = useState(defaultValues)
  let [errorMessage, setErrorMessage] = useState({
    name: 'Name Field is Mendatory',
    email: 'Email Field is Mendatory',
    phone: 'Phone Field is Mendatory',
    subject: 'Subject Field is Mendatory',
    message: 'Message Field is Mendatory'
  })
  let [show, setShow] = useState(false)
  let [message, setMessage] = useState("")

  let dispatch = useDispatch()

  function getInputData(e) {
    var { name, value } = e.target
    setErrorMessage((old) => {
      return {
        ...old,
        [name]: formValidator(e)
      }
    })
    setData((old) => {
      return {
        ...old,
        [name]: value
      }
    })
  }

  function postData(e) {
    e.preventDefault()
    let error = Object.values(errorMessage).find((x) => x !== "")
    if (error)
      setShow(true)
    else {
      setMessage("Thanks to Share Your Query With Us Our Team Will Contact You Soon")
      dispatch(createContactUs({ ...data, active: true, date: new Date() }))
      setData(defaultValues)
    }
  }
  return (
    <>
      <Breadcrum title="Contact Us" />

      {/* <!-- Contact Start --> */}
      <div className="container-fluid contact bg-light py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
            <h4 className="text-primary">Contact Us</h4>
            <h1 className="display-4 mb-4">If you have any query please contact us</h1>
          </div>
          <div className="row g-5">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="contact-img d-flex justify-content-center" >
                <div className="contact-img-inner">
                  <img src="img/carousel-2.png" className="img-fluid w-100" alt="Image" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
              <div>
                <h4 className="text-primary">Send Your Message</h4>
                {message ? <p className='text-success'>{message}</p> : ""}
                <form onSubmit={postData}>
                  <div className="row g-3">
                    <div className="col-lg-12">
                      <div className="form-floating">
                        <input type="text" className={`form-control border-2 ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} id="name" name="name" value={data.name} onChange={getInputData} placeholder="Your Name" />
                        <label htmlFor="name">{show && errorMessage.name ? errorMessage.name : " Your Name"}</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input type="email" className={`form-control border-2 ${show && errorMessage.email ? 'border-danger' : 'border-primary'}`} id="email" name="email" value={data.email} onChange={getInputData} placeholder="Your Email" />
                        <label htmlFor="email">{show && errorMessage.email ? errorMessage.email : " Your Email"}</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input type="phone" className={`form-control border-2 ${show && errorMessage.phone ? 'border-danger' : 'border-primary'}`} id="phone" name="phone" value={data.phone} onChange={getInputData} placeholder="Phone" />
                        <label htmlFor="phone">{show && errorMessage.phone ? errorMessage.phone : " Your Phone"}</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className={`form-control border-2 ${show && errorMessage.subject ? 'border-danger' : 'border-primary'}`} id="subject" name="subject" value={data.subject} onChange={getInputData} placeholder="Subject" />
                        <label htmlFor="subject">{show && errorMessage.subject ? errorMessage.subject : " Subject"}</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className={`form-control border-2 ${show && errorMessage.message ? 'border-danger' : 'border-primary'}`} name="message" value={data.message} onChange={getInputData} placeholder="Leave a message here" id="message" style={{ height: "120px" }}></textarea>
                        <label htmlFor="message">{show && errorMessage.message ? errorMessage.message : " Message"}</label>
                      </div>

                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type='submit'>Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12">
              <div>
                <div className="row g-4">
                  <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="contact-add-item">
                      <div className="contact-icon text-primary mb-4">
                        <i className="fas fa-map-marker-alt fa-2x"></i>
                      </div>
                      <div>
                        <h4>Address</h4>
                        <p className="mb-0">A-43 Sector 16 Noida, India</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="contact-add-item">
                      <div className="contact-icon text-primary mb-4">
                        <i className="fas fa-envelope fa-2x"></i>
                      </div>
                      <div>
                        <h4>Mail Us</h4>
                        <p className="mb-0"><a href="mailto:vishankchauhan@example.com">vishankchauhan@gmail.com</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="contact-add-item">
                      <div className="contact-icon text-primary mb-4">
                        <i className="fa fa-phone-alt fa-2x"></i>
                      </div>
                      <div>
                        <h4>Telephone</h4>
                        <p className="mb-0"><a href="tel:=+919873848046">+91-9873848046</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.8s">
                    <div className="contact-add-item">
                      <div className="contact-icon text-primary mb-4">
                        <i className="fab fa-whatsapp fa-2x"></i>
                      </div>
                      <div>
                        <h4>Yoursite@ex.com</h4>
                        <p className="mb-0"><a href="https://wa.me/9873848036">9873848036</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
              <div className="rounded">
                <iframe width="100%" height="400px" id="gmap_canvas" src="https://maps.google.com/maps?q=a-43%20Sector%2016%20noida&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}

    </>
  )
}
