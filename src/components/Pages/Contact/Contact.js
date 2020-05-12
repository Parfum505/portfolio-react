import React from "react";
import {splitToSpan} from "../../../helpers/helpers";


const Contact = () => {
    return (
        <main id="contact">
            <h1 className="lg-heading">
                <div>{splitToSpan("Contact Me", 8)}</div>
            </h1>
        </main>
    );
}

export default Contact;