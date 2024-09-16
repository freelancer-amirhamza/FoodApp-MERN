import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LogoImage from "../utils/Images/Logo.png";
import { FavoriteBorder, MenuRounded, SearchRounded, ShoppingCartOutlined } from "@mui/icons-material";
import Button  from "../components/Button.jsx"


const Navbar = ({openAuth, setOpenAuth}) => {
  const [isOpen, serIsOpen] = useState(false)
  return (
    <>
    <nav className={`flex flex-col w-full h-auto items-start bg-bg justify-center border-shadow border-b shadow-md`}>
      <div className=" border-b justify-end bg-bg z-50 position-fixed border-bg w- relative  flex w-full ">
      <div className="container py-5  flex w-full h-max items-center justify-between ">
        <div className="flex w-full  h-auto items-center justify-start  ">
          <div className='hover:text-primary  h-full mx-4 font-xl md:hidden cursor-pointer flex'>
            <MenuRounded onClick={() =>serIsOpen(!isOpen)  }/>
          </div>
          
        
        <NavLink className='flex  w-full  h-auto items-center justify-start' to='/'>
        <img src={LogoImage} alt="logo" />
        </NavLink>
        </div>
        <div className=" md:flex focus:pt-2 w-full hidden items-center justify-center gap-4 font-semibold ">
          <NavLink className=" focus-visible:border-b-primary focus:border-b-[3px] focus:text-primary  hover:text-primary"  to='/' >Home </NavLink>
          <NavLink className=" focus-visible:border-b-primary focus:border-b-[3px] focus:text-primary  hover:text-primary" to='/dishes' >Dishes </NavLink>
          <NavLink className="focus-visible:border-b-primary focus:border-b-[3px] focus:text-primary  hover:text-primary" to='/orders' >Orders </NavLink>
          <NavLink className=" focus-visible:border-b-primary focus:border-b-[3px] focus:text-primary  hover:text-primary" to='/contact' >Contact</NavLink>
        </div>
        <div className="flex  w-full items-center max-sm:items-end px-4 justify-end gap-3 ">
        <NavLink  className=" focus-visible:border-b-primary focus:border-b-2 focus:text-primary  hover:text-primary"  to='/' ><FavoriteBorder  /> </NavLink>
        <NavLink className=" focus-visible:border-b-primary focus:border-b-2 focus:text-primary  hover:text-primary"  to='/' ><SearchRounded  /> </NavLink>
        <NavLink className=" focus-visible:border-b-primary focus:border-b-2 focus:text-primary  hover:text-primary"  to='/' ><ShoppingCartOutlined  /> </NavLink>
          <div className="hidden gap-3 justify-end sm:flex " >
          <Button 
            text="Sign Up" 
            outlined
            onClick={() => setOpenAuth(true)}
            small/>
          <Button 
            text="Sign Up" 
            onClick={() => setOpenAuth(true)}
            small/>
          </div>
        </div>
      </div>
      </div>
      <div className={`flex  mt-4 px-5 w-max py-5 h-auto md:hidden flex-col
        ${isOpen? 'translate-y-32 rounded-br-sm duration-300 opacity-100 ' : "-translate-y-20 duration-300 opacity-50 "} z-40 bg-bg shadow-md   items-start justify-between absolute`}>
      <div isOpen={isOpen} className="  flex flex-col focus:pt-2  items-start justify-center gap-4 font-semibold ">
          <NavLink onClick={()=> serIsOpen(false)} className=" focus-visible:border-b-primary focus:border-b-[3px] focus:text-primary  hover:text-primary"  to='/' >Home </NavLink>
          <NavLink onClick={()=> serIsOpen(false)}  className=" focus-visible:border-b-primary focus:border-b-[3px] focus:text-primary  hover:text-primary" to='/dishes' >Dishes </NavLink>
          <NavLink onClick={()=> serIsOpen(false)} className="focus-visible:border-b-primary focus:border-b-[3px] focus:text-primary  hover:text-primary" to='/orders' >Orders </NavLink>
          <NavLink onClick={()=> serIsOpen(false)} className=" focus-visible:border-b-primary focus:border-b-[3px] focus:text-primary  hover:text-primary" to='/contact' >Contact</NavLink>
        </div>
        <div className=" sm:hidden items-start justify-end w-full h-full gap-5 flex " >
          <Button 
            text="Sign Up" 
            outlined
            onClick={() => setOpenAuth(true)}
            small/>
          <Button 
            text="Sign Up" 
            onClick={() => setOpenAuth(true)}
            small/>
          </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar