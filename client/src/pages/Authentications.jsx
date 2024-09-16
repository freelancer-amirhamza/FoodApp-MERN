import { Close } from '@mui/icons-material'
import { Modal } from '@mui/material'
import React from 'react'
import AuthImage from "../utils/Images/AuthImage.jpg"
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const Authentications = ( {openAuth, setOpenAuth, login, setLogin}) => {
  
  return (
    <>
    <Modal className="w-full container flex justify-center items-center mx-auto" open={openAuth} onClose={()=> setOpenAuth(false)} className=" ">
      <div className=" h-full  w-full flex items-center justify-between bg-bg ">
        <div className="h-full w-full  flex-1 flex max-sm:hidden  relative  ">
          <div className="flex w-full h-full ">
            <img className='w-full h-full object-top ' src={AuthImage} alt="" />
          </div>
        </div>
        <div className="h-full w-full bg-[#F9F6F3] items-center justify-center flex-[0.9] max-sm:flex flex
        relative ">
          <div onClick={()=> setOpenAuth(false)} className="absolute right-8 top-4 border border-spacing-5 w-fit p-2
          cursor-pointer rounded-full hover:bg-menu_secondary_text ">
            <Close  />
          </div>
          <div className="">
            { login? <SignIn/> : <SignUp/> }
          </div>
        </div>
      </div>
    </Modal>
    </>
  )
}

export default Authentications