import React from 'react'
import GsapTo from './examples/GsapTo.jsx'
import GsapFrom from './examples/GsapFrom.jsx'
import GsapFromTo from './examples/GsapFromTo.jsx'
import GsapTimeline from './examples/GsapTimeline.jsx'
import GsapStagger from './examples/GsapStagger.jsx'
import GsapScrollTrigger from './examples/GsapScrollTrigger.jsx'
import GsapText from './examples/GsapText.jsx'

export default function App() {
  return (
    <>
      <GsapText />
      <GsapTo />
      <GsapFrom />
      <GsapFromTo />
      <GsapTimeline />
      <GsapStagger />
      <GsapScrollTrigger />
    </>
  )
}