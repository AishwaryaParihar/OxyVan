import React from 'react'
import LeaderBoard from './LeaderBoard'
import Hero from './Hero'
import PlantType from './PlantType'

import Testimonials from './Testimonials'
import OurImpact from './OurImpact'
import Mission from './Mission'
const Home = () => {
  return (
    <div >
      <Hero/>
      <LeaderBoard/>
      <PlantType/>
      <Mission/>
      <OurImpact/>
      <Testimonials/>
    </div>
  )
}
export default Home