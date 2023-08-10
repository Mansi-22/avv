import React from 'react'
import Restaurant from './Restaurant'



const RestaurantList = ({restaurants}) => {
  return (
    <ul>
        {
            restaurants.map(post => (
                <Restaurant key={post.id} post ={post} />
              ))
        }

    </ul>
  )
}

export default RestaurantList