import React from 'react'
import Carousel from './Carousel'
import StudyNav from './StudyNav'
import HotVideo from './HotVideo'
import NewVideo from './NewVideo'
import RecommendVideo from './RecommendVideo'


function Home(){
    return <div>
        <Carousel />
        <StudyNav />
        <HotVideo />
        <NewVideo />
        <RecommendVideo />
    </div>
}
export default Home;