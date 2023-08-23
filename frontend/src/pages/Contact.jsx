import React from "react";
import './Contact.css';

const Contact = () => {
    return ( 
        <div className="contact">
            <form className="contactForm">
                <input type="text" placeholder="Name"></input><br />
                <input type="email" placeholder="Email"></input><br />
                <input type="text" placeholder="Feedback"></input><br />
                <input type="submit"></input><br />
            </form>
        </div>
    )
}

export default Contact;