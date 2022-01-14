import React from "react";
import './About.css';


function About(props) {
    console.log('props - about : ', props)
    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that the two plus two makes four. If that is granted, all else follows"
            </span>
            <span>- George Orwell</span>
        </div>
    );
}


export default About;