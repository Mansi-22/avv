import React from 'react'
import Link from'next/link'
import AddCuisines from '../components/AddCuisines';
import CuisinesList from '../components/CuisineList';
import Fileupload from '../components/Fileupload'
import PageSearch from '../components/PageSearch';
import ImageDisplay from '../components/ImageDisplay';


async function getData(){
    const res = await fetch("http://localhost:3000/api/posts",{cache : 'no-store'});
    // if(!res.ok){
    //   throw new Error("Failed to fetch data")
    // }
    return res.json();
}

const Cuisines = async() => {
    const posts = await getData();
    //console.log(posts.target.name);
    //console.log(localStorage);
  return (
    <div>
      <Fileupload/>
      <ImageDisplay/>
      {/* <PageSearch items={posts}/> */}
        <Link href="/">Admin Panel</Link>
        <h1 className='text-4x1'>Cuisines</h1>
        <AddCuisines/>
        <CuisinesList posts={posts} />
        

    </div>
  )
}

export default Cuisines;
