import React from 'react';
import backgroundImage from './uok.jpg'
import './eduplaces.css'
function eduplaces() {
    return (
        <section className="places">
            <div className="places-text">
                <small>FEATURED EDUTOURS PACKAGES</small>
                <h2>Favourite Edu Places</h2>
            </div>

            <div className="cards">
                <div className="card">
                    <div className="zoom-img">
                        <div className="img-card">
                            <img src="uok.jpg" alt="University of Kerala" />
                        </div>
                    </div>

                    <div className="text">
                        <span className="rating">⭐️⭐️⭐️⭐️⭐️</span>
                        <h2><a href="https://www.keralauniversity.ac.in/home">UNIVERSITY OF KERALA</a></h2>
                        <p className="cost">5000\- / Per Person</p>
                        <div className="card-box">
                            <p className="time">🕓 14 Days</p>
                            <p className="location">✈️ Thiruvananthapuram, Kerala</p>
                        </div>
                    </div>
                </div>
                <eduplaces/>
            </div>
        </section>
    );
}

export default eduplaces;
