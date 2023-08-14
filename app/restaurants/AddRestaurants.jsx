"use client"
import React from 'react'
import Modal from '../components/Modal'
import {useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/navigation'

const AddRestaurants = ({posts}) => {
    const router = useRouter();
    const [modalOpen,setModalOpen] =useState(false)
    const [inputs,setInputs] =useState({})

    const handleSubmit =(e) => {
    e.preventDefault();
    axios.post('/api/ress',inputs)
    .then((res) => {console.log(res)})
    .catch(err =>{console.log(err)})
    .finally(()=> {setInputs({});setModalOpen(false);router.refresh()})
}
const handleChange =(e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(prevState => ({...prevState, [name]: value}));
} 

  return (
    <div>
        <button onClick={() => setModalOpen(true)} className='bg-blue-700 text-white p-3 cursor-pointer'>Add New Restaurants</button>
        <Modal modelOpen ={modalOpen} setModalOpen={setModalOpen}>
            <form className='w-full' onSubmit={handleSubmit}>
                <h1 className='text-2xl pb-3'>Add New Cuisine</h1>
                <input 
                    type ="text"
                    placeholder='Name'
                    name ="name"
                    className='w-full p-2'
                    value={inputs.name || ""}
                    onChange={handleChange}
                />
                <input 
                    type ="text"
                    placeholder='Description'
                    name ="description"
                    className='w-full p-2 my-5'
                    value={inputs.description || ""}
                    onChange={handleChange}
                />
                <div>
                  <select value={inputs.cuis} onChange={handleChange} name="cuis">
                    {posts.map(post => (
                        <option>{post.name}</option>
                    ))
                    }
                </select>
                </div>
                <input
                    type="text"
                    placeholder='address'
                    name ='address'
                    className='w-full p-2 my-5'
                    value={inputs.address || ""}
                    onChange={handleChange}
                    />
                <input
                    type="text"
                    placeholder='resimage'
                    name ='resimage'
                    className='w-full p-2 my-5'
                    value={inputs.resimage || ""}
                    onChange={handleChange}
                    />    
                 
                <button type="submit" className='bg-blue-700 text-white px-5 py-2'>Save</button>
                <button type="submit" className='bg-blue-700 text-white px-5 py-2' onClick={() => setModalOpen(false)}>Cancel</button>
            </form>
        </Modal>
    </div>
  )
}

export default AddRestaurants