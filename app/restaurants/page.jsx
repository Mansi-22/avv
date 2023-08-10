import React from 'react'
import Link from'next/link'
import DropDown from '../components/DropDown';

export const Restaurants = () => {
  return (
    <div>
      Restaurants <Link href="/">Admin Panel</Link>
      
      <DropDown/>
    </div>
  )
}

export default Restaurants;