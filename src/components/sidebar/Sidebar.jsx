import React from 'react'
import Cards from './Cards'
import './sidebar.css'
const sidebar = () => {
  return (
    <div className='sidebarMainContainer'>
      <div className="sideBarTopSection">
        <h1>Your Library</h1>
        <p>+</p>
      </div>
      <div className="sideBarMiddleSection">
        <Cards heading= "Create Your First Playlist" subheading= "It's easy we'll help you" buttontext= "Create playlist"/> 
        <Cards heading= "Let's find some podcast to follow" subheading= "We'll keep you updated on new episodes" buttontext= "Browse podcasts"/>
      </div>
      <div className="sideBarBottomSection">
        
      </div>
    </div>
  )
}

export default sidebar
