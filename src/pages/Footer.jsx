import React from 'react'
import '../css/footer.css'

import Socials from '../components/Socials'
import { motion } from "motion/react"


function Footer() {
    return (
        <>

            <footer>
                <div className='footer-text'>
                    <motion.p
                        initial={{ opacity: 0, y: 0, filter: 'blur(4px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: false, }}
                    >© {new Date().getFullYear()} codeWaghre, All rights reserved.</motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 0, filter: 'blur(4px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: false, }}

                >
                    <Socials />
                </motion.div>
            </footer>
        </>
    )
}

export default Footer