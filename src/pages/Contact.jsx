import React from "react"
import ContactForm from "../components/ContactForm"
import ContactInfo from "../components/ContactInfo"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Contact = () => {
    return (
        <div className="Contact">
            <ContactInfo />
            <ContactForm />
        </div>
    )
}

export default Contact