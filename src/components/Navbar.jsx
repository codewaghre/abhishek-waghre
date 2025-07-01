import React from 'react'
import '../css/navbar.css'
import { useTheme } from '../hooks/theme-context';
import themeMap from '../data/theme.json'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';

function Navbar() {


    const { theme, setTheme } = useTheme()

    const logoSrc =
        theme === 'dark' || theme === 'darkBlue'
            ? '/logo/logo-dark.png'
            : theme === 'light'
                ? './logo/logo-light.png' : ""



    return (
        <nav>
            <motion.div
                initial={{ opacity: 0, y: -6, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
                className='logo'
            >
                <a> <img src={logoSrc} alt='Abhishek Waghre Portfolio logo' loading="lazy" />codeWaghre</a>
            </motion.div>


            <div className='slogan'>
                <motion.h3
                    initial={{ opacity: 0, y: -6, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.5 }}
                >

                    Crafting Code Daily.{' '}
                    <TypeAnimation
                        sequence={[
                            500,
                            'Not daily',
                            500,
                            'Everyday',
                            500,
                            'Sometimes',
                            500,
                            'Rarely',
                            500,
                        ]}
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </motion.h3>
            </div>

            <div className="theme-container">
                {themeMap[theme].map((t, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 0, filter: 'blur(8px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                        key={i}
                        className={t.color}
                        onClick={() => setTheme(t.theme)}
                    ></motion.div>
                ))}
            </div>




        </nav >
    )
}

export default Navbar

