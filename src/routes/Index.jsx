import React from 'react'
import "../css/grid-bg.css"

import { useTheme } from '../hooks/theme-context'

import Home from '../pages/Home'
import Work from '../pages/Work'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Project from '../pages/Project'
import Socials from '../components/Socials'
import Footer from '../pages/Footer'
import StickyBar from '../components/StickyBar'

function Index() {
    const { theme } = useTheme()
    return (
        <main className='main-bg sticky'>

            <StickyBar />
            <section className={`section-wrapper ${theme === "light" ? "bg-light" : theme === "dark" ? "bg-dark" : "bg-blue"}`}>

                <Home />
                <Project />
                <Work />

                <About />
                <Contact />
                <Footer />
            </section>
        </main >
    )
}

export default Index