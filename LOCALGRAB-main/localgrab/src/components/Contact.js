import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
        <div className="hero_area_2">
            <div className="hero_bg_box">
            <div className="bg_img_box">
                <img src="../images//hero-bg.png" alt="" />
            </div>
            </div>
        </div>
        <section className="contact_us">
            <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                <div className="contact_inner">
                    <div className="row">
                    <div className="col-md-10">
                        <div className="contact_form_inner">
                        <div className="contact_field">
                            <h3>Contact Us</h3>
                            <p>
                            Feel Free to contact us any time. We will get back to you
                            as soon as we can!.
                            </p>
                            <input
                            type="text"
                            className="form-control form-group"
                            placeholder="Name"
                            />
                            <input
                            type="text"
                            className="form-control form-group"
                            placeholder="Email"
                            />
                            <textarea
                            className="form-control form-group"
                            placeholder="Message"
                            defaultValue={""}
                            />
                            <button className="contact_form_submit">Send</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="right_conatct_social_icon d-flex align-items-end" />
                    </div>
                    </div>
                    <div className="contact_info_sec">
                    <h4>Contact Info</h4>
                    <div className="d-flex info_single align-items-center">
                        <i className="fas fa-headset" />
                        <span>+91 8088608193</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                        <i className="fas fa-envelope-open-text" />
                        <span>chirukarya@gmail.com</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                        <i className="fas fa-map-marked-alt" />
                        <span>
                        Vidyavardhaka College of Engineering, Gokulam, Mysore,
                        Karnataka{" "}
                        </span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="map_sec">
            <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                <div className="map_inner">
                    <h4 style={{color : "black"}}>Find Us on Google Map</h4>
                    <p style={{color : "black", fontSize: "large"}}>
                    {" "}
                    We, the students from Vidyavardhaka College of Engineering, are
                    the creators of this project, having designed and coded it.{" "}
                    </p>
                    <div className="map_bind">
                    <iframe
                        src="https://maps.google.com/maps?q=Av.+L%C3%Vidyavardhaka+College+of+Engineering,+Mysore,+Karnataka,+India&t=&z=17&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="450"  // Change this to a string
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        id="map"
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="info_section layout_padding2">
            <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-3 info_col">
                <div className="info_contact">
                    <h4>Address</h4>
                    <div className="contact_link_box">
                    <a href="#">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                        <span>Vidyavardhaka College of Engineering, Mysore</span>
                    </a>
                    <a href="#">
                        <i className="fa fa-phone" aria-hidden="true" />
                        <span>Call +91 8088608193</span>
                    </a>
                    <a href="#">
                        <i className="fa fa-envelope" aria-hidden="true" />
                        <span>chirukarya@gmail.com</span>
                    </a>
                    </div>
                </div>
                <div className="info_social">
                    <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                    <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                    <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                    <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 info_col">
                <div className="info_detail">
                    <h4>Info</h4>
                    <p>
                    Efficiently manage and track deliveries with our web application,
                    streamlining the entire process for a seamless customer experience
                    and optimized logistics. From order placement to doorstep arrival,
                    our delivery platform ensures reliability and convenience.
                    </p>
                </div>
                </div>
                <div className="col-md-6 col-lg-2 mx-auto info_col">
                <div className="info_link_box">
                    <h4>Links</h4>
                    <div className="info_links">
                    <Link className="active" to="/home">
                        Home
                    </Link>
                    <Link className="" to="/about">
                        About
                    </Link>
                    <Link className="" to="/contact">
                        Contact
                    </Link>
                    <Link className="" to="/team">
                        Team
                    </Link>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 info_col ">
                {/* <h4>Subscribe</h4>
                <form action="#">
                    <input type="text" placeholder="Enter email" />
                    <button type="submit">Subscribe</button>
                </form> */}
                </div>
            </div>
            </div>
        </section>
        <section className="footer_section">
            <div className="container">
            <p>
                © <span id="displayYear" /> All Rights Reserved By
                <a href="https://html.design/">Team Incognito</a>
            </p>
            </div>
        </section>
    </>
  )
}