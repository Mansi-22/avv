"use client"
import React from 'react'
import Link from 'next/link'
import DropDownMenu from '@/app/components/DropdownMenu'
import Button from './components/Button'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export const Homepage = () => {
  const router = useRouter();
  const logout = async () => {
    try {
        await axios.get('/api/logout')
        router.push('/login')
        console.log("logout pressed")
    } catch (error) {
        console.log(error.message);
        
    }
}

  return (
    <div>
      <h1>Homepage </h1>
      <DropDownMenu/>
      <ul>
        <li><Link href="/advertisement">Advertisement</Link></li>
        <li><Link href="/cuisines">Cuisines</Link></li>
        <li><Link href="/location">Location</Link></li>
        <li><Link href="/pages">Pages</Link></li>
        <li><Link href="/restaurants">Restaurants</Link></li>
        <li><Link href="/settings">Settings</Link></li>
      </ul>
    <Button label="Logout"  onClick={logout}></Button>

    </div>
  )
}

export default Homepage;
