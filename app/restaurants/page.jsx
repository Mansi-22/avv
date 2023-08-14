import React from 'react'
import Link from'next/link'
import AddRestaurants from './AddRestaurants';
import RestaurantList from './RestaurantList';

async function getData(){
  const res = await fetch("http://localhost:3000/api/ress",{cache : 'no-store'});
  return res.json();
}

async function getDatas(){
  const res = await fetch("http://localhost:3000/api/posts",{cache : 'no-store'});
  return res.json();
}

export const Restaurants = async() => {
  
  const restaurants = await getData();
  //console.log(posts);
  const posts = await getDatas();

  return (
    <div>
      Restaurants <Link href="/">Admin Panel</Link>
      <AddRestaurants posts={posts}/>
      <RestaurantList restaurants ={restaurants} posts={posts}/>
    </div>
  )
}

export default Restaurants;