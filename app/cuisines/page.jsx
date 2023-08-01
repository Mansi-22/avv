import React from 'react'
import Link from'next/link'
import AddCuisines from '../components/AddCuisines';

async function getPostData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}

export const Cuisines = async() => {
    const cuisines = await getPostData();
  return (
    <div>
        <Link href="/">Admin Panel</Link>
        <h1 className='text-4x1'>Cuisines</h1>
        <AddCuisines/>
        <ul className='flex flex-col gap-1'>
        {
            cuisines.map(cuisines => (
                // <Link key={cuisines.id} href={'/cuisines/${cuisines.id}'}></Link>

                <li className='bg-gray=100 p-5 cursor-pointer'>
                    <h4 className='text-x1 font-bold'>{cuisines.name}</h4>
                </li>
            ))
        }
        </ul>


    </div>
  )
}

export default Cuisines;