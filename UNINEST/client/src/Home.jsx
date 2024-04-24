import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import './eduplaces.css';
import backgroundImage from './uok.jpg'; 
import college from './klh.jpg';
import gitam from './gitam.jpg';
import madras from './iit mardas.jpg';
import sspu from './sspu.jpg';
import uoc from './uoc.jpg';
import vocher from './vocher.jpg';
function Home({ email, userName }) {
    return (
        <>
            <div className="navbar">
                <Link to="/" className="logo">Edu Tours</Link> {/* Use Link instead of a */}
                <div className="menu">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/profile">{userName ? userName : "Profile"}</Link>
                </div>
            </div>
            <div className="banner-text-item">
                <div className="banner-heading">
                    <h1>Find your Next Edu tour!</h1>
                </div>
                <div className="container">
                    <form className="form">
                        <input type="text" list="mylist" placeholder="Where would you like to go?" />
                        <datalist id="mylist">
                            <option>chennai</option>
                            <option>banglore</option>
                            <option>hyderabad</option>
                            <option>kerala</option>
                            <option>pune</option>
                            <option>mumbai</option>
                            <option>kolkata</option>
                        </datalist>
                        <input type="date" className="date" />
                        <button type="submit" className="book">Book</button> {/* Changed <a> to button */}
                    </form>
                </div>
            </div>
            <section className="places">
                <div className="places-text">
                    <small>FEATURED EDUTOURS PACKAGES</small>
                    <h2>Favourite Edu Places</h2>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="zoom-img">
                            <div className="img-card">
                                <img src={backgroundImage} alt="University of Kerala" />
                            </div>
                        </div>
                        <div className="text">
                            <span className="rating">⭐️⭐️⭐️⭐️</span>
                            <h2><a href="https://www.keralauniversity.ac.in/home">UNIVERSITY OF KERALA</a></h2>
                            <p className="cost">5000\- / Per Person</p>
                            <div className="card-box">
                                <p className="time">🕓 14 Days</p>
                                <p className="location">✈️ Thiruvananthapuram, Kerala</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="zoom-img">
                            <div className="img-card">
                                <img src={college} alt="KL University"/>
                            </div>
                        </div>
                        <div className="text">
                            <span className="rating">⭐️⭐️⭐️</span>
                            <h2><a href="https://klh.edu.in/aziznagar/">The KL UNIVERSITY</a></h2>
                            <p className="cost">6000\- / Per Person</p>
                            <div className="card-box">
                                <p className="time">🕓 7 Days</p>
                                <p className="location">✈️ Aziznagar, Hyderabad</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="zoom-img">
                            <div className="img-card">
                                <img src={gitam} alt="Gitam"/>
                            </div>
                        </div>
                        <div className="text">
                            <span className="rating">⭐️⭐️⭐️⭐️</span>
                            <h2><a href="https://www.gitam.edu/academics/gitam-campuses/bengaluru-campus">GITAM UNIVERSITY</a></h2>
                            <p className="cost">7000\- / Per Person</p>
                            <div className="card-box">
                                <p className="time">🕓 4 Days</p>
                                <p className="location">✈️ Bangalore, Karnataka</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="zoom-img">
                            <div className="img-card">
                                <img src={madras} alt="IIT MADRAS"/>
                            </div>
                        </div>
                        <div className="text">
                            <span className="rating">⭐️⭐️⭐️⭐️⭐️</span>
                            <h2><a href="https://www.iitm.ac.in/">IIT MADRAS</a></h2>
                            <p className="cost">5600\- / Per Person</p>
                            <div className="card-box">
                                <p className="time">🕓 9 Days</p>
                                <p className="location">✈️ Chennai, Tamil Nadu</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="zoom-img">
                            <div className="img-card">
                                <img src={sspu} alt="Pune university"/>
                            </div>
                        </div>
                        <div className="text">
                            <span className="rating">⭐️⭐️⭐️⭐️⭐️</span>
                            <h2><a href="http://www.unipune.ac.in/">The SPP UNIVERSITY</a></h2>
                            <p className="cost">$1870 / Per Person</p>
                            <div className="card-box">
                                <p className="time">🕓 3 Days</p>
                                <p className="location">✈️ Pune, Maharashtra</p>
                            </div>      
                        </div>
                    </div>
                    <div class="card">
                    <div class="zoom-img">
                        <div class="img-card">
                            <img src={uoc} alt="uoc"/>
                        </div>
                    </div>
                    <div class="text">
                        <span class="rating">⭐️⭐️⭐️⭐️⭐️</span>
                        <h2><a href="https://www.caluniv.ac.in/">UNIVERSITY OF CALCUTTA</a></h2>
                        <p class="cost">7800\- / Per Person</p>
                        <div class="card-box">
                            <p class="time">🕓 10 Days</p>
                            <p class="location">✈️ Kolkata, West Bengal</p>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div class="footer">
            <div class="links">
                <h3>Quick Links</h3>
                <ul>
                    <li>Offers & Discounts</li>
                    <li>Get Coupon</li>
                    <li>Contact Us</li>
                    <li>About</li>
                </ul>
            </div>
            <div class="links">
                <h3>New Products</h3>
                <ul>
                    <li>Woman Cloth</li>
                    <li>Fashion Accessories</li>
                    <li>Man Accessories</li>
                    <li>Rubber made Toys</li>
                </ul>
            </div>
            <div class="links">
                <h3>Support</h3>
                <ul>
                    <li>Frequently Asked Questions</li>
                    <li>Report a Payment Issue</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
        

            </section>
          
        </>
    );
}

export default Home;