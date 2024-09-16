import React from 'react'
import AboutIntro from './AboutIntro'
import AboutVision from './AboutVision'
import Mission from './Mission'
import StepsDonation from './StepsDonation'
import StepsSpent from './StepsSpent'

const About = () => {
  return (
    <div>
    <AboutIntro/>
    <AboutVision/>
    {/* <StepsDonation/>
    <StepsSpent/> */}
    <Mission/>
</div>
  )
}

export default About