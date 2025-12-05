import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import useIsMobile from "../../customHook/useIsMobile"

import portrait from "/src/assets/Portrait.jpg"
import cv from "/src/assets/Bruckner-CV.pdf" //need to use the pdf in some way or else netlify removes it on build

export default function() {
    const imgRef = useRef(null)
    const descriptionRef = useRef(null)
    const projectRef = useRef(null)

    const isMobile: boolean = useIsMobile()
    const [gsapY, setGsapY] = useState<number>(checkMobile()) //animation value for x

    function checkMobile() {
        if(isMobile) {
            return 0
        }
        else {
            return -100
        }
    }

    useEffect(() => {
            gsap.fromTo(imgRef.current,
                {
                    y: gsapY * -1,
                    opacity: 0
                },
                {           
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "Power1.easeOut",
                    scrollTrigger: {
                        trigger: imgRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    },
                });
        
                gsap.fromTo(descriptionRef.current,
                    {
                        y: gsapY,
                        opacity: 0
                    },
                    {           
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "Power1.easeOut",
                        scrollTrigger: {
                            trigger: imgRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        },
                    });
    }, [])

    return <section id="aboutMe" className="aboutMe">
        <div className="gutter-row">
            <h2 className="primary-heading">About Me</h2>
            <div className="aboutMe__container-flex">
                <img className="aboutMe__portrait" alt="Portrait of the author" src={portrait} ref={imgRef}/>
                <div className="white-1 fs-small" ref={descriptionRef}>
                    <p className="aboutMe__description">I'm a web developer based in Vienna, AT. I love building websites that have oustanding visuals, solve 
                        real-world problems, and that are delightful to use. My specialties include HTML, CSS/SCSS, TypeScript, 
                        React and Svelte.</p>
                    <p className="aboutMe__description">I went to school in HTL Krems with a primary focus on media technology and currently studying business informatics at WU.</p>
                    <a href={cv} className="aboutMe__btn btn btn--left-to-right-hover">My Resume</a>           
                </div>
            </div>     
        </div>
    </section>
}