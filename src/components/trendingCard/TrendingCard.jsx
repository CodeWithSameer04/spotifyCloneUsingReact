import React from 'react'
import './trendingCard.css'
import { TrendingCardData } from '../../assets/config/config.js'
const TrendingCard = () => {
  return (
    <>
      <div className='trendingCardMainContainer'>
    {
      TrendingCardData.map((ele)=> {
        return (
          <>
              <div className="cardContainer">
                <img src={ele.imgSrc} alt="" />
                <div className="cardTextContainer">
                  <h2>{ele.heading}</h2>
                  <p>{ele.subHeading}</p>
                </div>
              </div>
          </>
        )
      })
    }
    </div>
    </>
  )
}

export default TrendingCard
