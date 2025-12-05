import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsMobile from "../../../customHook/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

import githubsvg from "/src/assets/github.svg"

type ProjectProps = {
    preview: string,
    title: string,
    description: string,
    technologies: string[],
    link: string
}

export default function({preview, title, description, technologies, link}: ProjectProps) {
    const isMobile: boolean = useIsMobile()
    const [gsapX, setGsapX] = useState<number>(checkMobile()) //animation value for x
    const projectRef = useRef(null)

    function checkMobile() {
        if(isMobile) {
            return 0
        }
        else {
            return -100
        }
    }

    useEffect(() => {
        gsap.fromTo(projectRef.current,
        {
            x: gsapX,
            opacity: 0
        },
        {           
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "Power1.easeOut",
            scrollTrigger: {
                trigger: projectRef.current,
                start: "top 85%",
                toggleActions: "play none none none"
            },
        });
    }, [])

    return <div className="project" ref={projectRef}>
        <img className="project__preview" alt="Screenshot of a project website from Daniel Bruckner" src={preview}/>
        <div>
            <h3>{title}</h3>
            <p className="project__description fs-small white-1">{description}</p>
            <ul className="project__items white-1 fs-small">
                {technologies.map((item: string, index: number) => 
                    <li className="project__item" key={index}>{item}</li>
                )}
            </ul>
            <div className="project__container-link">
                <a className="project__link fs-small white-1 btn btn--bottom-border btn--left-to-right-hover" href={link} target="_blank">Visit Site <span>&rarr;</span></a>
                <a href="https://github.com/daniel-bruckner" target="_blank"><img className="project__github" alt="Github logo" src={githubsvg} /></a>
            </div>
        </div>
    </div>
}