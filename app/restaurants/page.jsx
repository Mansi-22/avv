import React from 'react'
import Link from'next/link'
import DropDown from '../components/DropDown';
import AddRestaurants from './AddRestaurants';
import RestaurantList from './RestaurantList';

async function getData(){
  const res = await fetch("http://localhost:3000/api/ress",{cache : 'no-store'});
  return res.json();
}

export const Restaurants = async() => {
  
  const restaurants = await getData();
  //console.log(posts);

  return (
    <div>
      Restaurants <Link href="/">Admin Panel</Link>
      <AddRestaurants/>
      <RestaurantList restaurants ={restaurants}/>
      <DropDown/>
    </div>
  )
}

export default Restaurants;