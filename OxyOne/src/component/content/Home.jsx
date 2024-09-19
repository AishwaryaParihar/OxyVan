import React from 'react'
import LeaderBoard from './LeaderBoard'
import Hero from './Hero'
import PlantType from './PlantType'

import Testimonials from './Testimonials'
import OurImpact from './OurImpact'
import Mission from './Mission'
import Demoo from './Demoo'
import GiftorDonate from './GiftorDonate'
import StepsDonation from './StepsDonation'
import StepsSpent from './StepsSpent'
import Voluanteer from './Voluanteer'
import WhyDonate from './WhyDonate'

const Home = () => {
  return (
    <div >
      <Hero/>
      <LeaderBoard/>
      <WhyDonate/>
      <GiftorDonate/>
      <StepsDonation/>
      <StepsSpent/>
      <PlantType/>
      <Voluanteer/>
      <Mission/> 
      <OurImpact/>
      <Testimonials/>
      {/* <Demoo age={14} name={'toshi'} pancard={false}/> */}
    </div>
  )
}
export default Home