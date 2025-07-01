import React from 'react'
import '../css/work.css'

import Heading from '../components/Heading'
import workjson from '../data/work.json'

import { motion } from "motion/react"

function Work() {
    const { heading, work } = workjson
    return (
        <>
            <section id='work' className='work'>
                <Heading text={heading} />

                {
                    work.map((work, i) => (
                        <div key={i}>
                            <motion.main
                                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className='work-container'

                            >

                                <div className='work-year'>
                                    <p>{work.year}</p>
                                </div>

                                <div className='work-status'>
                                    <p>{work.position}</p>

                                </div>

                                <div className='work-info'>
                                    <p className='company-name'>{work.company} </p>

                                    <div>
                                        <ul>
                                            <li className='work-des'>{work.p1}</li>
                                            <li className='work-des'>{work.p2}</li>
                                            {work.p3 ? <li className='work-des'>{work.p3}</li> : ""}
                                            {work.p4 ? <li className='work-des'>{work.p4}</li> : ""}
                                        </ul>
                                    </div>
                                </div>


                            </motion.main>
                            <motion.div
                                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className='full-line'>

                            </motion.div>
                        </div>
                    ))
                }







            </section>
        </>
    )
}

export default Work