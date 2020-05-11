import React, {useEffect} from "react";
import { faFacebookSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import LinkIcon from "./LinkIcon/LinkIcon";
import { splitToSpan } from "./../../../helpers/helpers";

const Home = () => {
    const iconsData = [
        {name: faFacebookSquare, link: "https://www.facebook.com/profile.php?id=100001563674935"},
        {name: faLinkedin, link: "https://www.linkedin.com/in/pavel-kryvytskyi-370720124/"},
        {name: faGithubSquare, link: "https://github.com/Parfum505?tab=repositories"}
    ];
    const title1 = ("Hi,"),
        title2 = ("I'm Pavel"),
        title3 = ("Kryvytskyi");
    useEffect(() => {
        const title = document.querySelector("#home .lg-heading"),
            subTitle = document.querySelector("#home .sm-heading");
        title.classList.add('loaded', 'active');
        const letters = Array.prototype.slice.call(document.querySelectorAll("#home .letter"));
        const lastLetterIndex = letters.length - 1;

        letters.forEach((item, idx) => {
            item.classList.add(`animation-delay${idx + 1}`);
            item.addEventListener('animationend', () => {
                if (idx === lastLetterIndex) {
                    title.classList.remove('active');
                    subTitle.classList.add('dropIn');
                }
            });
        });
        return () => {
            letters.forEach((item, idx) => {
                item.removeEventListener('animationend', () => {
                    if (idx === lastLetterIndex) {
                        title.classList.remove('active');
                        subTitle.classList.add('dropIn');
                    }
                });
            });
        }
    });
    return (
        <main id="home">
            <h1 className="lg-heading">
                <div>{splitToSpan(title1)}</div>
                <div className="inline-block">{splitToSpan(title2, 4)}&nbsp;</div>
                <div className="inline-block">{splitToSpan(title3, 0)}</div>
            </h1>
            <h2 className="sm-heading animated">Front End Developer / Software Engineer</h2>
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