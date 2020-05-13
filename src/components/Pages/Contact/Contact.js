import React from "react";
import {splitToSpan} from "../../../helpers/helpers";
import LinkIcons from "../Home/LinkIcons/LinkIcons";
import LinkIcon from "../Home/LinkIcons/LinkIcon/LinkIcon";
import {faEnvelopeSquare, faPhoneSquare, faPhoneSquareAlt} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <main id="contact">
            <h1 className="lg-heading">
                <div>{splitToSpan("Contact Me", 8)}</div>
            </h1>
            <h2 className="sm-heading">Feel free to contact me via...</h2>
            <ul className="contact-boxes">
                <li className="contact-box">
                    <LinkIcon iconName={faEnvelopeSquare} link="mailto:pavel.kryvytskyi@gmail.com"><span>pavel.kryvytskyi@gmail.com</span></LinkIcon>
                </li>
                <li className="contact-box">
                    <LinkIcon iconName={faPhoneSquare} link="tel:+48791612604"><span>(+48) 791-612-604</span></LinkIcon>
                </li>
                <li className="contact-box social">
                    <LinkIcons />
                </li>
            </ul>
        </main>
    );
}

export default Contact;