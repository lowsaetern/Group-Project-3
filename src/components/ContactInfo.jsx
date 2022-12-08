import React from "react";
const ContactInfo = () => {
    return (
        <div className="container mt-5 contactInfo">
            <div className="row">
                <div className="col-sm mailAddress">
                    <h2 className="mb-3">Address</h2>
                    <p>
                        Buy Other People's Stuff
                        <br />
                        123 Road Rd 
                        <br />
                        City, St 11111
                    </p>
                </div>
                <div className="col-sm phone">
                    <h2 className="mb-3">Phone</h2>
                    <p>
                        Telephone 1: (123) 456 - 7890
                        <br />
                        Telephone 2: (123) 456 - 7891
                    </p>
                </div>
                <div className="col-sm email">
                    <h2 className="mb-3">Email</h2>
                    <p>
                        Email 1: bops@example.com
                        <br />
                        Email 2: bopsCS@example.com
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ContactInfo