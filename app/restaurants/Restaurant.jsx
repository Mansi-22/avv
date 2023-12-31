'use client'
import React from 'react'
import Modal from '../components/Modal';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const restaurant = ({post,posts}) => {
  const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [postToEdit,setPostToEdit] = useState(post);
    const [openModalDelete,setOpenModalDelete] = useState(false);
    const handleEditSubmit =(e) => {
        e.preventDefault();
        if(validateForm()){
          axios.patch(`/api/ress/${post.resid}`,postToEdit)
          .then((res) => {console.log(res)})
          .catch(err =>{console.log(err)})
          .finally(()=> {setOpenModalEdit(false);router.refresh()})   
        }      
    }
    const handleChange =(e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPostToEdit(prevState => ({...prevState, [name]: value}));
    }  
    const handleDeletePost=(id) => {
        axios.delete(`/api/ress/${id}`)
        .then((res) => {console.log(res)})
        .catch(err =>{console.log(err)})
        .finally(()=> {setOpenModalDelete(false);router.refresh()})
    } 
    const [errors, setErrors] = useState({});
    const validateForm = () => {
      const newErrors = {};
      if (!postToEdit.name) {
        newErrors.name = 'name is required.';
      } 
      if (!postToEdit.description) {
        newErrors.description = 'Description is required.';
      }
      if (!postToEdit.cuis) {
        newErrors.cuis = 'Please select a cuisine.';
        }
      if (!postToEdit.address) {
        newErrors.address = 'Address is required.';
        }  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
  };

  return (
    <li className='p-3 my-5 bg-slate-200' key={post.id}>
      <h1 className='text-2xl font-bold'>{post.name}</h1>
      <p>{post.description}</p>
      <p>{post.cuis}</p>
      <p>{post.address}</p>
      <p>{post.resimage}</p>
      <div className='pt-5'>
        <button className='text-blue-700 mr-3' onClick={() => setOpenModalEdit(true)}>Edit</button> 
        <Modal modelOpen ={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form className='w-full' onSubmit={handleEditSubmit}>
            <h1 className='text-2xl pb-3'>Add New Cuisine</h1>
            <input 
              type ="text"
              placeholder='Name'
              name ="name"
              className='w-full p-2'
              value={postToEdit.name || ""}
              onChange={handleChange}
            />
            {errors.name && <div className="error">{errors.name}</div>}
            <input 
              type ="text"
              placeholder='Description'
              name ="description"
              className='w-full p-2 my-5'
              value={postToEdit.description || ""}
              onChange={handleChange}
            />
            {errors.description && <div className="error">{errors.description}</div>}
            <div>
              <select value={postToEdit.cuis} onChange={handleChange} name="cuis">
                {posts.map(post => (
                  <option>{post.name}</option>
                  ))
                }
              </select>
            </div>
            {errors.cuis && <div className="error">{errors.cuis}</div>}
            <input
              type="text"
              placeholder='address'
              name ='address'
              className='w-full p-2 my-5'
              value={postToEdit.address || ""}
              onChange={handleChange}
            />
            {errors.address && <div className="error">{errors.address}</div>}   
            <input
              type="text"
              placeholder='resimage'
              name ='resimage'
              className='w-full p-2 my-5'
              value={postToEdit.resimage || ""}
              onChange={handleChange}
            />    
            <button type="submit" className='bg-blue-700 text-white px-5 py-2'>Save</button>
            <button type="submit" className='bg-blue-700 text-white px-5 py-2' onClick={() => setOpenModalEdit(false)}>Cancel</button>
          </form> 
        </Modal>
        <button className='text-red-700 mr-3' onClick={() => setOpenModalDelete(true)} > Delete </button>
        <Modal modelOpen ={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h1 className='text-2xl pb-3'>Are you sure you want to delete it?</h1>
          <div>
            <button onClick={()=>handleDeletePost(post.resid)} className='text-blue-700 font-bold mr-5'>YES</button>
            <button onClick={() => setOpenModalDelete(false)} className='text-red-700 font-bold mr-5'>NO</button>
          </div>
        </Modal> 
      </div>
    </li>
  )
}

export default restaurant