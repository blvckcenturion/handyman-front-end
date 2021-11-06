import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons'

const Rating = ({ rating }) => {

    return (
        <div className="rating">
            {
                [...Array(5)].map((star, i) => rating >= i + 1 ? <FontAwesomeIcon key={i} icon={faStar} /> : <FontAwesomeIcon key={i} icon={faStarOutline} />)
            }
        </div>
    )
}

export default Rating

