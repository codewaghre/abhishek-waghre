import React from 'react'
import '../css/project.css'

import Heading from '../components/Heading'
import { FaCircleDot } from "react-icons/fa6";

import projectjson from "../data/project.json"
import { motion } from 'motion/react';

function Project() {
    const { heading, project, des } = projectjson
    return (
        <>
            <section id='project' className='project'>
                <Heading text={heading} />
                <div className='project-para'>
                    <motion.p
                        initial={{ opacity: 0, y: 6, filter: 'blur(4px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.6 }}
                    >"{des}"
                    </motion.p>
                </div>

                <main className='project-container'>
                    {
                        project.map((data, i) => (

                            <motion.div className='project-card-container'
                                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.5 }}
                                key={i}
                            >

                                <div className='card-info'>
                                    <div className='card-img'>
                                        <a className='card-img'>
                                            <img loading="lazy" alt={data.alt} src={data.image} />
                                        </a>
                                    </div>

                                    <div className='card-text'>
                                        <p>{data.projectName}</p>
                                        <div className='full-line'></div>
                                        <div className='project-links'>
                                            {data.live ? <a href={data.live} target='blank' ><span><FaCircleDot /></span> Live</a> : ""}
                                            <a href={data.source} target='blank' > <span><FaCircleDot /></span> Source Code</a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </main>
            </section>
        </>
    )
}

export default Project