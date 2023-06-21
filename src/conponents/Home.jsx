import React from 'react'
import WelcomeSection from './WelcomeSection'
import FlowerType from './FlowerType'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
    return (
        <>
            <WelcomeSection />
            <FlowerType />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default Home