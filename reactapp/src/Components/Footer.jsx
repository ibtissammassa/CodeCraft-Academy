import React from 'react';
import '../assets/css/Footer.css'; // Import the CSS file

function Footer() {
    return (
        <div className="footer-container">
            <div className="main">
                <div className="about">
                    <h3 className="heading">About Us</h3>
                    <p>Welcome to E-learning, your gateway to comprehensive tech education. We are passionate about fostering a community-driven learning environment where individuals from all backgrounds can expand their knowledge horizons. With an array of meticulously crafted courses and a commitment to providing cutting-edge content, we aim to equip you with the skills needed to thrive in today's digital landscape. Let's embark on this educational journey together and unlock your potential!</p>
                </div>
                <div>
                    <h3 className="heading">Quick Links</h3>
                    <ul className="links">
                        <li>Home</li>
                        <li>Course</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h3 className="heading">Connect With Us</h3>
                    <ul className="contact">
                        <li>info@yourcompany.example.com</li>
                        <li>+1(450) 999-1111</li>
                    </ul>
                </div>
            </div>
            <div className="bar">
                <p>&copy; 2023 E-Learning All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
