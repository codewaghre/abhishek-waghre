import React from 'react'
import { motion } from "motion/react"

function Heading({ text }) {
    return (
        <>
            <div className='work-heading'>
                <motion.h2
                    initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.6 }}
                >{text};</motion.h2>
            </div>
        </>
    )
}

export default Heading