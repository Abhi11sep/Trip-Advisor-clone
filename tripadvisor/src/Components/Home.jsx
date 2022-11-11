import React from 'react'
import Experience from './Experience'
import Footer from './Footer'
import GetoutThere from './GetoutThere'
import MoreExplore from './MoreExplore'
import Options from './Options'
import Sceneic from './Sceneic'
import SearchSpace from './SearchSpace'
import TopDestination from './TopDestination'
import TopMissed from './TopMissed'

const Home = () => {
  return (
    <div>
    <Options/>
      <SearchSpace/>
      <Experience/>
      <GetoutThere/>
      <Sceneic/>
      <MoreExplore/>
      <TopMissed/>
      <TopDestination/>
      <Footer/>
      
    </div>
  )
}

export default Home