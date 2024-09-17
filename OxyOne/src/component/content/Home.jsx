import React from 'react'
import LeaderBoard from './LeaderBoard'
import Hero from './Hero'
import PlantType from './PlantType'

import Testimonials from './Testimonials'
import OurImpact from './OurImpact'
import Mission from './Mission'
import Demoo from './Demoo'
import GiftorDonate from './GiftorDonate'
import TreePlantingInfo from './WhyDonate'
import StepsDonation from './StepsDonation'
import StepsSpent from './StepsSpent'
import Voluanteer from './Voluanteer'
const Home = () => {
  return (
    <div >
      <Hero/>
      <LeaderBoard/>
      <TreePlantingInfo/>
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