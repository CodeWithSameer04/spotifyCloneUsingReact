import React from 'react'
import './popularArtists.css'
import ArtistCard from '../artistCard/ArtistCard'
const popularArtists = () => {
  return (
    <div className='popularArtistsMainContainer'>
      PopularArtists
      <ArtistCard />
    </div>
  )
}

export default popularArtists
