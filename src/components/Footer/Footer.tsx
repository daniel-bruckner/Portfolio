import React from "react"

import github_logo from "/src/assets/github.svg"
import linkedIn_logo from "/src/assets/linkedIn.svg"
import frontEndMentor_logo from "/src/assets/frontendmentor.png"

export default function() {
    return <footer className="footer">
        <a href="https://github.com/daniel-bruckner" target="_blank">
            <img className="footer__icon" alt="github logo" src={github_logo} />
        </a>
        <a href="https://www.linkedin.com/in/daniel-bruckner-40b043257/" target="_blank">
            <img className="footer__icon" alt="LinkedIn logo" src={linkedIn_logo} />
        </a>
        <a href="https://www.frontendmentor.io/profile/DaBruckner" target="_blank">
            <img className="footer__icon" alt="FrontendMentor logo" src={frontEndMentor_logo} />
        </a>
    </footer>
}