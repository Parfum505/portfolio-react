import React from "react";
import { faFacebookSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import LinkIcon from "./LinkIcon/LinkIcon";

const Home = () => {
    const iconsData = [
        {name: faFacebookSquare, link: "https://www.facebook.com/profile.php?id=100001563674935"},
        {name: faLinkedin, link: "https://www.linkedin.com/in/pavel-kryvytskyi-370720124/"},
        {name: faGithubSquare, link: "https://github.com/Parfum505?tab=repositories"}
    ];
    return (
        <main id="home">
            <h1 className="lg-heading">
                Hi,<br />I'm <span className="text-secondary">Pavel</span>
            </h1>
            <h2 className="sm-heading">Front End Developer / Software Engineer</h2>
            <div className="icons">
                {
                    iconsData.map((li, i) => (
                        <LinkIcon iconName={li.name} link={li.link} key={i}/>
                    ))
                }
            </div>

        </main>
    );
}

export default Home;