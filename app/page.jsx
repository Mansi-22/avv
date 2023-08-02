import React from 'react'
import Link from 'next/link'

export const Homepage = () => {
  return (
    <div>
      <h1>Homepage </h1>
      <ul>
        <li><Link href="/advertisement">Advertisement</Link></li>
        <li><Link href="/cuisines">Cuisines</Link></li>
        <li><Link href="/location">Location</Link></li>
        <li><Link href="/pages">Pages</Link></li>
        <li><Link href="/restaurants">Restaurants</Link></li>
        <li><Link href="/settings">Settings</Link></li>
      </ul>
    </div>
  )
}

export default Homepage;
