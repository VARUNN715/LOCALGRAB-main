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
        <section className="team_section layout_padding">
            <div className="container-fluid">
            <div className="heading_container heading_center">
                <h2 style={{ color: "white" }}>
                Our <span> Team </span>
                </h2>
            </div>
            <div className="team_container">
                <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="box ">
                    <div className="img-box">
                        <img src="../images//sat.jpg" className="img1" alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>Sathvik V</h5>
                    </div>
                    <div className="social_box">
                        <a href="#">
                        <i
                            className="fa fa-twitter"
                            aria-hidden="true"
                            style={{ marginLeft: 50 }}
                        />
                        </a>
                        <a href="#">
                        <i
                            className="fa fa-linkedin"
                            aria-hidden="true"
                            style={{ marginRight: 50 }}
                        />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="box ">
                    <div className="img-box">
                        <img src="../images//shiva.jpg" className="img1" alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>Shiva Prasad E</h5>
                    </div>
                    <div className="social_box">
                        <a href="#">
                        <i
                            className="fa fa-twitter"
                            aria-hidden="true"
                            style={{ marginLeft: 50 }}
                        />
                        </a>
                        <a href="#">
                        <i
                            className="fa fa-linkedin"
                            aria-hidden="true"
                            style={{ marginRight: 50 }}
                        />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="box ">
                    <div className="img-box">
                        <img src="../images//varun.jpeg" className="img1" alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>Varun N</h5>
                    </div>
                    <div className="social_box">
                        <a href="#">
                        <i
                            className="fa fa-twitter"
                            aria-hidden="true"
                            style={{ marginLeft: 50 }}
                        />
                        </a>
                        <a href="#">
                        <i
                            className="fa fa-linkedin"
                            aria-hidden="true"
                            style={{ marginRight: 50 }}
                        />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="box ">
                    <div className="img-box">
                        <img src="../images//srujan.jpg" className="img1" alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>Srujan M R</h5>
                    </div>
                    <div className="social_box">
                        <a href="#">
                        <i
                            className="fa fa-twitter"
                            aria-hidden="true"
                            style={{ marginLeft: 50 }}
                        />
                        </a>
                        <a href="#">
                        <i
                            className="fa fa-linkedin"
                            aria-hidden="true"
                            style={{ marginRight: 50 }}
                        />
                        </a>
                    </div>
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