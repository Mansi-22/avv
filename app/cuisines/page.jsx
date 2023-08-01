import React from 'react'
import Link from'next/link'
import AddCuisines from '../components/AddCuisines';
import CuisinesList from '../components/CuisineList';

async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}

const Cuisines = async() => {
    const posts = await getData();
  return (
    <div>
        <Link href="/">Admin Panel</Link>
        <h1 className='text-4x1'>Cuisines</h1>
        <AddCuisines/>
        <CuisinesList posts={posts} />

    </div>
  )
}

export default Cuisines;
