import React, { useEffect, useRef, useState } from 'react'
import '../css/stickybar.css'

import { IoMdHome } from "react-icons/io";
import { IoMdFolder } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaToolbox } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";

import { motion, useScroll, useMotionValueEvent } from "motion/react"

import { useScrollContext } from '../hooks/scroll-context';

function StickyBar() {
    const { activeSection } = useScrollContext();
    const [hidden, setHidden] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
    const { scrollY } = useScroll();
    const lastYRef = useRef(0);


    const sidebarVariants = {
        visible: isMobile ? { y: "0%" } : { x: "0%" },
        hidden: isMobile ? { y: "-90%" } : { x: "-80%" },
        peeking: isMobile
            ? { y: "0%", cursor: "pointer" }
            : { x: "0%", cursor: "pointer" },
    };


    useMotionValueEvent(scrollY, "change", (y) => {
        const difference = y - lastYRef.current;
        if (Math.abs(difference) > 180) {
            setHidden(difference > 0);
            lastYRef.current = y;
        }
    });

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 500);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <>

            <motion.div
                variants={sidebarVariants}
                initial="visible"
                animate={hidden ? "hidden" : "visible"}
                whileHover={hidden ? "peeking" : "visible"}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                onFocusCapture={hidden ? () => setHidden(false) : undefined}
                className='stickybar'>
                <div className="letter-container">
                    <div className={`letter ${activeSection === "home" ? "active" : ""}`} data-tooltip="Home">
                        <a href="#home"><IoMdHome /></a>
                    </div>
                    <div className={`letter ${activeSection === "project" ? "active" : ""}`} data-tooltip="Project">
                        <a href="#project"><IoMdFolder /></a>
                    </div>
                    <div className={`letter ${activeSection === "work" ? "active" : ""}`} data-tooltip="Work">
                        <a href="#work"><FaToolbox /></a>
                    </div>
                    <div className={`letter ${activeSection === "about" ? "active" : ""}`} data-tooltip="About">
                        <a href="#about"><MdContactPage /></a>
                    </div>
                    <div className={`letter ${activeSection === "contact" ? "active" : ""}`} data-tooltip="Contact">
                        <a href="#contact"><IoMdMail /></a>
                    </div>
                </div>
            </motion.div>



        </>
    )
}

export default StickyBar