import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"

import "./tourCard.scss"

const TourCard = ({ name, price, slug, days, image, departure }) => {
  return (
    <div className="tour-card">
      <AniLink fade to={`/tours/${slug}`}>
        <figure className="tour-card__img-wrapper">
          <Image fluid={image} className="tour-card__img" alt="tour" />
          <figcaption className="tour-card__duration">
            <span className="tour-card__duration-days">{days}</span>
            <span className="tour-card__duration-text">days</span>
          </figcaption>
        </figure>
      </AniLink>
      <h3 className="tour-card__name">{name}</h3>
      <p className="tour-card__departure">Departs {departure}</p>
      <div className="tour-card__price-offer">
        From <span> &pound;{price}</span>
      </div>
      <AniLink fade to={`/tours/${slug}`}>
        <div className="tour-card__btn-wrapper">
          <button type="button" className="btn-primary tour-card__btn">
            Explore Tour
          </button>
        </div>
      </AniLink>
    </div>
  )
}

export default TourCard
