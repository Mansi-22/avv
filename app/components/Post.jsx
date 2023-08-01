'use client'
import React from 'react'
import Modal from './Modal';
import { useState } from 'react';

const Post = ({post}) => {
    const [openModalEdit, setModalOpenEdit] = useState(false);
    const [postToEdit,setPostToEdit] =useState(post);
    const[openModalDelete,setOpenModalDelete] = useState(false);

    const handleEditSubmit =(e) => {
        e.preventDefault();
        console.log(postToEdit);
        setModalOpenEdit({})
                
    }
    const handleChange =(e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPostToEdit(prevState => ({...prevState, [name]: value}));
    }  
    const handleDeletePost=(id) => {
        console.log("deleted");
    }          
    
  return (
    <li className='p-3 my-5 bg-slate-200' key={post.id}>
    <h1 className='text-2xl font-bold'>{post.name}</h1>
    <div className='pt-5'>
        <button className='text-blue-700 mr-3' onClick={() => setModalOpenEdit(true)}>Edit</button>
        <Modal modelOpen ={openModalEdit} setModalOpen={setModalOpenEdit}>
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
                <input 
                    type ="text"
                    placeholder='Description'
                    name ="description"
                    className='w-full p-2 my-5'
                    value={postToEdit.description || ""}
                    onChange={handleChange}
                />
                <button type="submit" className='bg-blue-700 text-white px-5 py-2'>Save</button>
                <button type="submit" className='bg-blue-700 text-white px-5 py-2' onClick={() => setModalOpenEdit(false)}>Cancel</button>
            </form>
        </Modal>
        <button onClick={() => setOpenModalDelete(true)} className='text-red-700 mr-3'>Delete</button>
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
	        <h1 className="text-2xl pb-3"> Are you sure of this action?</h1>
            <div>
	        <button onClick={() => handleDeletePost(post.id)} classname="text-blue-700 font-bold mr-5">YES</button>
	        <button onClick={() => setOpenModalDelete(false)} classname="text-red-700 font-bold mr-5">NO</button>	
            </div>
        </Modal>
    </div>
    </li>
  )
}

export default Post
