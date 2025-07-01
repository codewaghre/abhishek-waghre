import React from 'react'
import "../css/home.css"

import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Socials from '../components/Socials'

import { TypeAnimation } from 'react-type-animation';
import homejson from '../data/home.json'
import { motion } from 'motion/react'


function Home() {
    const { headingOne, mainPara, connectBtn, resumeBtn, connect, resume } = homejson
    return (
        <motion.section
            id='home'
            className='home'

        >
            <header>
                <Navbar />
            </header>

            <main className='text-container'>
                <div className="heading-one">
                    <motion.h3
                        initial={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        console.log("Hello World!")
                    </motion.h3>
                </div>


                <div className='heading-two'>
                    <motion.h1
                        initial={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {headingOne}
                    </motion.h1>
                </div>

                <div className='main-para'

                >
                    <motion.p
                        initial={{ opacity: 0, y: 6, filter: 'blur(4px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {mainPara}
                    </motion.p>
                </div>

                <div className='home-page-socials'>
                    <motion.div
                        initial={{ opacity: 0, x: -6, filter: 'blur(4px)' }}
                        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className='home-page-btn'>
                        <Button
                            text={connectBtn}
                            link={connect} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -6, filter: 'blur(4px)' }}
                        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className='home-page-btn'>
                        <Button text={resumeBtn} link={resume} />
                    </motion.div>

                    <div className='home-page-socials'>
                        <Socials />
                    </div>
                </div>



            </main>

        </motion.section>
    )
}

export default Home