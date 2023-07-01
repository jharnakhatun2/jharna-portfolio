import React from 'react'
import Hero from './Hero'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
    </div>
  )
}

export default Home