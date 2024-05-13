import React from 'react'
import {Link} from 'react-router-dom'

export default function home() {
  return (
      <>
        <div className="hero_area">
            <div className="hero_bg_box">
            <div className="bg_img_box">
                <img src="../images/hero-bg.png" alt="" />
            </div>
            </div>

            <section className="slider_section ">
            <div
                id="customCarousel1"
                className="carousel slide my-4"
                data-ride="carousel"
            >
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-6 ">
                        <div className="detail-box">
                            <h1>
                            Convenience <br />
                            Store
                            </h1>
                            <p>
                            Experience the convenience of our prompt grocery delivery
                            service where you can select from a wide array of fresh
                            and quality produce. Choose the groceries you need, and
                            rest assured that they will be delivered to your doorstep
                            within a swift 10-minute timeframe. Indulge in the
                            freshness of our handpicked vegetables, all delivered with
                            utmost care to ensure the highest quality. Elevate your
                            shopping experience with our service, making daily
                            essentials effortlessly accessible.
                            </p>
                            <div className="btn-box">
                            <Link
                                to="/GroceryStores"
                                className="btn1"
                            >
                                Order
                            </Link>
                            </div>  
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="img-box">
                            <img src="../images/gro.png" alt="" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <div className="container ">
                    <div className="row">
                        <div className="col-md-6 ">
                        <div className="detail-box">
                            <h1>Pharmacy</h1>
                            <p>
                            In times of urgency, we extend our swift medication
                            delivery service, ensuring that your essential medicines
                            reach your doorstep within a 10-minute timeframe. Through
                            our dedicated delivery app, we promptly communicate your
                            prescription details to pharmacies, facilitating a
                            seamless and efficient process. Your well-being is our top
                            priority, and our commitment lies in providing timely and
                            reliable pharmaceutical services during emergencies.
                            </p>
                            <div className="btn-box">
                            <Link to="/pharmacyStores" className="btn1">
                                Order
                            </Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="img-box">
                            <img
                            src="../images/medi.png"
                            alt=""
                            style={{ height: 245, width: 270, marginLeft: 0 }}
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container ">
                    <div className="row">
                        <div className="col-md-6 ">
                        <div className="detail-box">
                            <h1>
                            Lifestyle &amp; <br />
                            Clothing
                            </h1>
                            <p>
                            Select your desired clothing item on our user-friendly
                            app, proceed to checkout with size and preferred delivery
                            time, confirm, and await seamless doorstep delivery.
                            </p>
                            <div className="btn-box">
                            <Link to="/clothingStores" className="btn1">
                                Order
                            </Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="img-box">
                            <img
                            src="../images/cl.png"
                            alt=""
                            style={{ height: 245, width: 270, marginLeft: 0 }}
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <ol className="carousel-indicators">
                <li
                    data-target="#customCarousel1"
                    data-slide-to={0}
                    className="active"
                />
                <li data-target="#customCarousel1" data-slide-to={1} />
                <li data-target="#customCarousel1" data-slide-to={2} />
                </ol>
            </div>
            </section>
        </div>
        <section className="service_section layout_padding">
            <div className="service_container">
            <div className="container ">
                <div className="heading_container heading_center">
                <h2 style={{color: "black"}}>
                    Our <span> Services</span>
                </h2>
                <p  style={{color: "black"}}>
                    {" "}
                    Experience seamless delivery services catering to your every need,
                    from prompt grocery deliveries to swift medication drop-offs,
                    ensuring convenience at your doorstep with our comprehensive
                    delivery application
                </p>
                </div>
                <div className="row">
                <div className="col-md-4 ">
                    <div className="box ">
                    <div className="img-box">
                        <img src="../images/convi.png" alt="" />
                    </div>
                    <div className="detail-box">
                        <h5 style={{ color: "black" }}>Convenience store</h5>
                        <p>
                        "Discover unparalleled convenience with our delivery web app's
                        local convenience store. From everyday essentials to
                        last-minute necessities, enjoy swift and seamless doorstep
                        delivery for a hassle-free shopping experience."
                        </p>
                        <Link to="/groceryStores">Read More</Link>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="box ">
                    <div className="img-box">
                        <img src="../images/pharmacy.png" alt="" />
                    </div>
                    <div className="detail-box">
                        <h5 style={{ color: "black" }}>Pharmacy</h5>
                        <p>
                        "Efficiently fulfill your pharmaceutical needs with our
                        delivery web application, ensuring swift and reliable access
                        to a diverse range of medications right at your doorstep."
                        </p>
                        <Link to="/pharmacyStores" style={{marginTop: 20}}>Read More</Link>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="box ">
                    <div className="img-box">
                        <img src="../images/cloth.png" alt="" />
                    </div>
                    <div className="detail-box">
                        <h5 style={{ color: "black" }}>Clothing</h5>
                        <p>
                        "Explore the latest trends and effortlessly elevate your style
                        with our curated collection of fashion essentials, delivered
                        directly to your doorstep through our convenient clothing
                        store on the delivery web application."
                        </p>
                        <Link to="/clothingStores">Read More</Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="btn-box">
                <Link to="/comingSoon">View All</Link>
                </div>
            </div>
            </div>
        </section>
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
                        <img src="../images//sp.jpg" className="img1" alt="" />
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
                <a href="https://html.design/"> Team Incognito</a>
            </p>
            </div>
        </section>
    </>
  )
}
