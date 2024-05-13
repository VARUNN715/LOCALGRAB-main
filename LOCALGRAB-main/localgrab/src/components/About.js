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
    <section className="about_section layout_padding">
        <div className="container  ">
        <div className="heading_container heading_center">
            <h2 style={{ color: "white" }}>
            About <span>Us</span>
            </h2>
            <p style={{ color: "white" }}>
            "Experience instant gratification with our hyperlocal delivery web
            app—effortlessly bringing your needs to your doorstep within minutes."
            </p>
        </div>
        <div className="row">
            <div className="col-md-6 ">
            <div className="img-box">
                <img src="../images//logo2.png" alt="" />
            </div>
            </div>
            <div className="col-md-6">
            <div className="detail-box">
                <h3>
                We Are <span>localGrab</span>
                </h3>
                <p>
                Our hyperlocal delivery web application revolutionizes convenience
                by bringing an array of essential services right to your
                fingertips. Seamlessly integrating mapping technology, users can
                pinpoint their location, facilitating swift and precise delivery.
                The app offers a diverse selection of products, from groceries to
                pharmaceuticals, ensuring users can meet their everyday needs
                effortlessly.
                </p>
                <p>
                Navigating the user-friendly interface, customers can explore
                local businesses, select desired items, and place orders with a
                few simple clicks. Real-time tracking keeps users informed about
                their delivery's progress, while secure payment options streamline
                transactions. In emergencies, our app shines, delivering critical
                items within an impressive 10-minute window, providing peace of
                mind during urgent situations.
                </p>
                {/* <a href="">
            Read More
        </a> */}
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
    {/* end info section */}
    {/* footer section */}
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
