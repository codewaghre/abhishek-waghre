import React from 'react'
import '../css/about.css'
import Heading from "../components/Heading"
import Button from '../components/Button'
import Socials from '../components/Socials'

import aboutjson from "../data/about.json"

import { motion } from "motion/react"


function About() {
    const { headingText, about, aboutPageButtons, stats } = aboutjson
    return (
        <section id='about' className='about'>
            <div className='about-heading'>
                <Heading text={headingText} />
            </div>

            <main className='about-container'>
                <div className='about-info-container'>

                    {about.map((section, i) => (
                        <div key={i} className={section.className}>
                            <motion.p
                                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {section.content.map((item, index) =>
                                    item.type === "normal" ? item.text : (
                                        <span key={index} className={item.type}>{item.text}</span>
                                    )
                                )}
                            </motion.p>
                        </div>
                    ))}

                    <div className='home-page-socials'>
                        {aboutPageButtons.map((btn, i) => (
                            <div key={i} className={btn.className}>
                                <Button text={btn.props.text} link={btn.props.link} />
                            </div>
                        ))}

                        <div className='home-page-socials'>
                            <Socials />
                        </div>
                    </div>
                </div>




                <div className='stats-container'>

                    <div className='stats'>

                        {stats.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: false, amount: 0.4 }}
                                key={index}
                                className={item.className}

                            >
                                <div className={item.innerClass}>
                                    <h1>{item.title}</h1>
                                    <p className='tagline'>{item.tagline}</p>
                                    <div className='full-line'></div>
                                    <p className='taglinetwo'>{item.taglinetwo}</p>
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </main>


        </section >
    )
}

export default About