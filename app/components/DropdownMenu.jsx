// "use client"
// import React, { useState } from "react";
// import {IoMdNotificationsOutline} from 'react-icons/io'
// import { IoIosHelpCircleOutline } from 'react-icons/io';
// import { CiLogout } from 'react-icons/ci';
// import {CiSettings} from 'react-icons/ci'
// import {RiEditBoxLine} from 'react-icons/ri'
// import {CgProfile} from 'react-icons/cg'

// function DropdownMenu() {
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <div className={`navigation${isActive ? " active" : ""}`}>
//       <div className="userBx">
//         <div className="imgBx">
//           <img src="/img/user2.jpg" alt="user" />
//         </div>
//         <p className="username">Jully smith</p>
//       </div>
//       <div className="menuToggle" onClick={handleClick}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//       <ul className="menu">
//         <li>
//           <a href="/"><CgProfile/>My profile</a>
//         </li>
//         <li>
//           <a href="/"><RiEditBoxLine/> Edit</a>
//         </li>
//         <li>
//           <a href="/"><IoMdNotificationsOutline/> Notifications</a>
//         </li>
//         <li>
//           <a href="/"><CiSettings/> Settings</a>
//         </li>
//         <li>
//           <a href="/"><IoIosHelpCircleOutline/> Help & support</a>
//         </li>
//         <li>
//           <a href="/"><CiLogout/> Logout</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default DropdownMenu;

"use client"
import React,{useRef, useState} from 'react'


const DropdownMenu = () => {
    const [open,setOpen] = useState(false)
    const Menus = ['Profile','change Password','Logout']
    const menuRef = useRef();
    const imgRef = useRef();

    // window.addEventListener('click',(e)=>{
    
    //     if (e.target !== menuRef.current && e.target !== imgRef.current){
    //         setOpen(false);
    //     }
    // })

  return (
    
        <div className=' bg-gray-200 flex justify-center'>
            <div className='relative'>
            <img ref={imgRef} onClick={()=> setOpen(!open)}
            src='/next.svg' alt="user" className='h-20 w-20 object-cover border-4 border-gray-400 rounded-full cursor-pointer'/>
        {
            open &&
        <div ref={menuRef} className='bg-white p-4 w-52 shadow-lg absolute -left-14 top-24'>
            <ul>
               {
                Menus.map((menu)=>(
                    <li onClick={()=> setOpen(false)} 
                    className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100' key ={menu}>{menu}</li>
                ))
               }
            </ul>
        </div>
}
        </div>
    </div>
  )
}

export default DropdownMenu