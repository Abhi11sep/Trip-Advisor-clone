import React from 'react'
import Experience from './Experience.jsx'
import Footer from './Footer.jsx'
import GetoutThere from './GetoutThere.jsx'
import MoreExplore from './MoreExplore.jsx'
import Options from './Options.jsx'
import Sceneic from './Sceneic.jsx'
import SearchSpace from './SearchSpace.jsx'
import TopDestination from './TopDestination.jsx'
import TopMissed from './TopMissed.jsx'

const Home = () => {
  return (
    <div style={{paddingTop:'65px'}}>
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