import React from 'react'
import Restaurant from './Restaurant'



const RestaurantList = ({restaurants,posts}) => {
  return (
    <ul>
        {
            restaurants.map(post => (
                <Restaurant key={post.id} post ={post} posts={posts} />
              ))
        }

    </ul>
  )
}

export default RestaurantList