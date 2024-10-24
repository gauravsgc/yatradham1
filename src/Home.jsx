import React from 'react'
import Slider from './Slider'
import Search from './Search'
import News from './News'
import Newscard from './Newscard'
import Subscribe from './Subscribe'
import Videoplay from './Videoplay'
import Blogs from './Blogs'
import Footers from './Footers'
import Lastvisit from './Lastvisit'



export default function Home() {
  return (
    <div className=''>

    <div className="carousalsection">
      <Slider/>
    </div>
    {/* <div className="searchsection">
      <Search/>
    </div> */}
    <div className='backSection'>
    <div className="newssection">
      <News/>
    </div>
    <div className="contentcardsection">
      <Newscard/>
    </div>
    
    {/* <div className="videosection">
      <Videoplay/>
    </div> */}
    <div className="blog">
      <Blogs/>
    </div>
    <div className="recenttrip py-5">
    <Lastvisit/>
    </div>
    {/* <div className="subscribeSection">
    <Subscribe/>
    </div> */}
    <div className="footersection" style={{marginTop:'2vh'}}>
      <Footers/>
    </div>
    </div>
    </div>

  )
}
