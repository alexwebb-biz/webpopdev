import { Component } from "react";
import props from 'react';
import React from "react";

class ContactForm extends Component {
    render() {
        return (
            <div>
                <form className="contact-Form">
                    <input type = "text" placeholder="Email" required/>
                    <input type = "text" placeholder="Phone Number" required/>
                    <textarea placeholder="Your Message Here" required/>
                    <input type = "submit" placeholder="Submit" required/>
                </form>
            </div>
        )
    }
}

export default ContactForm;