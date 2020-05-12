import React from "react";


const Cube = () => {
    const skills = [
        'Javascript', 'React', 'CSS3', 'HTML5', 'Webpack', 'PHP'
    ];
    return (
        <ul className="cube">
            {
                skills.map((skill,i) => (
                    <li key={i}  className="cube_face">
                        <img className="cube_logo" src={"images/skills/" + skill.toLowerCase() + ".png"} alt={skill}/>
                        <span className="cube_skill">{skill}</span>
                    </li>)
                )
            }
        </ul>
    );
}

export default Cube;