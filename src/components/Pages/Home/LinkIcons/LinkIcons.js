import React from "react";
import {faFacebookSquare, faGithubSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import LinkIcon from "./LinkIcon/LinkIcon";

const LinkIcons = () => {
    const iconsData = [
        {name: faFacebookSquare, link: "https://www.facebook.com/profile.php?id=100001563674935"},
        {name: faLinkedin, link: "https://www.linkedin.com/in/pavel-kryvytskyi-370720124/"},
        {name: faGithubSquare, link: "https://github.com/Parfum505?tab=repositories"}
    ];
    return (
        <>
            {
                iconsData.map((li, i) => (
                    <LinkIcon iconName={li.name} link={li.link} key={i}/>
                ))
            }
        </>
    );
};

export default LinkIcons;