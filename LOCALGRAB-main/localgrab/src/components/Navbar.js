import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <>
        <div className="hero_area_2">
            <div className="hero_bg_box">
            <div className="bg_img_box">
                <img src="../images/hero-bg.png" alt="" />
            </div>
            </div>
            <header className="header_section">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="../public/index.html">
                  <span>
                    localGrab
                  </span>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav  ">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about"> About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/team">Team</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/sales">Sales Analysis</Link>
                    </li>
                    <li className="nav-item">
                    
                    <div>
                      {isAuthenticated ? (
                        <>
                          <div className="vendor">
                            <a href="../../vendor/vendor.html" style={{color: "white"}}>	&#xf2b9; Vendor </a>
                          </div>
                          <Link className="nav-link" to="/login">
                          <button onClick={() => logout()}>Logout</button></Link>
                        </>
                      ) : (
                        <div>
                            <button onClick={() => loginWithRedirect()} style={{backgroundColor: "transparent",color: "white", border: "transparent", marginTop: "4px"}}  className= "auth-btn" >LOGIN / SIGNUP</button>
                        </div>
                      )}
                    </div>
                    </li>
                    <form className="form-inline">
                    </form>
                  </ul>
                </div>
              </nav>
            </div>
            </header>
        </div>
    </>
  )
}

export default Navbar