import React from 'react'
import gsap from 'gsap';
// import GsapTo from './examples/GsapTo.jsx'
// import GsapFrom from './examples/GsapFrom.jsx'
// import GsapFromTo from './examples/GsapFromTo.jsx'
// import GsapTimeline from './examples/GsapTimeline.jsx'
// import GsapStagger from './examples/GsapStagger.jsx'
// import GsapScrollTrigger from './examples/GsapScrollTrigger.jsx'
// import GsapText from './examples/GsapText.jsx'

import {ScrollTrigger, SplitText } from "gsap/all"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art'
import Menu  from './components/Menu';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger, SplitText);


export default function App() {
  return (
    <>
      {/* <GsapText />
      <GsapTo />
      <GsapFrom />
      <GsapFromTo />
      <GsapTimeline />
      <GsapStagger />
      <GsapScrollTrigger /> */}

        <main>
          <Navbar />
          <Hero />
          <Cocktails />
          <About />
          <Art />          
          <Menu />
          <Contact />


        </main>

    </>
  )
}