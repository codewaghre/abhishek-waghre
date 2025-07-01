import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import linkjosn from "../data/links.json"
import { motion } from 'motion/react';


function Socials() {
    return (
        <>

            {
                linkjosn.map((link, i) => (
                    <motion.div
                        initial={{ opacity: 0, x: -6, filter: 'blur(4px)' }}
                        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                        key={i}
                        className='social-container'>
                        <div>
                            <a href={link.linkedin} target='blank'><FaLinkedinIn /></a>
                        </div>

                        <div>
                            <a href={link.github} target='blank'><FaGithubAlt /></a>
                        </div>

                        <div>
                            <a href={link.gmail} target='blank'><SiGmail /></a>

                        </div>
                    </motion.div>
                ))
            }

        </>
    )
}

export default Socials