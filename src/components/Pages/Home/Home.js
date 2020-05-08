import React, {useEffect} from "react";
import { faFacebookSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import LinkIcon from "./LinkIcon/LinkIcon";

const Home = () => {
    const iconsData = [
        {name: faFacebookSquare, link: "https://www.facebook.com/profile.php?id=100001563674935"},
        {name: faLinkedin, link: "https://www.linkedin.com/in/pavel-kryvytskyi-370720124/"},
        {name: faGithubSquare, link: "https://github.com/Parfum505?tab=repositories"}
    ];
    const title = ("Hi,I'm Pavel Kryvytskyi").split("");
    useEffect(() => {
        const title = document.querySelector("#home .lg-heading");
        const subTitle = document.querySelector("#home .sm-heading");
        title.classList.add('loaded');
        const letters = Array.prototype.slice.call(document.querySelectorAll("#home .letter"));
        const lastLetterIndex = letters.length - 1;

        letters.forEach((item, idx) => {
            item.addEventListener('animationend', () => {
                item.style.opacity = 1;
                if (idx === lastLetterIndex) {
                    title.classList.remove('loaded');
                    subTitle.style.opacity = 1;
                }
            });
        });
        return () => {
            letters.forEach((item, idx) => {
                item.removeEventListener('animationend', () => {
                    item.style.opacity = 1;
                    if (idx === lastLetterIndex) {
                        title.classList.remove('loaded');
                        subTitle.style.opacity = 1;
                    }
                });
            });
        }
    });
    return (
        <main id="home">
            <h1 className="lg-heading">
                {
                    title.map((item, i) => {
                        if(item === ",") {
                            return (<span key={i} className="letter">{item}</span>,<br  key="br" />)
                        }else if(item === " ") {
                            return <span key={i} >{item}</span>
                        } else if(i < 7) {
                            return <span key={i} className="letter">{item}</span>
                        }  else if(item){
                            return <span key={i} className="letter text-secondary">{item}</span>
                        }
                    })
                }
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