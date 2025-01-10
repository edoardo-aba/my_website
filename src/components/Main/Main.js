import React from 'react';
import './Main.css';
import gifImage from '../../images/name.gif'; // Importing the image

const Main = () => {
    return (
        <section className="main-section">
            <div className="name-container">
                <img src={gifImage} alt="Typing animation" />
            </div>
            <div className="software-developer-container">
                <h2 className="software-developer">Software</h2>
                <h2 className="software-developer">Developer</h2>
            </div>
        </section>
    );
};

export default Main;
