import React from 'react'

const restaurant = ({post}) => {
  return (
    <li className='p-3 my-5 bg-slate-200' key={post.id}>
      <h1 className='text-2xl font-bold'>{post.name}</h1>
      <p>{post.description}</p>
      <p>{post.address}</p>
      <p>{post.resimage}</p>
      
    </li>
  )
}

export default restaurant