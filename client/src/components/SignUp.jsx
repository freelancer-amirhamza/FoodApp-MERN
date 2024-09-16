import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = ({login, setLogin}) => {
    
  return (
    <>
    <div className="w-full flex items-center justify-center border-2 border-dotted border-text_primary rounded-md ">
        <div className="flex w-full flex-col items-center p-3  text-start ">
            <h1 className="px-2 text-start w-full text-xl font-bold text-primary">Welcome to Amir Hamza 👋 </h1>
            <span className="px-2 text-start w-full text-md text-text_primary"> Please Sign Up with your details here. </span>
            <div className="flex w-full flex-col   p-2 gap-1  rounded-sm">
                <label className='font-semibold text-primary ' htmlFor="name">Name</label>
                <input 
                className='border-[1px] border-dotted focus:outline-none
                px-4 py-2 rounded '
                placeholder='Enter Your Name'
                type="name"
                name="name" 
                id="name" />
            </div>
            <div className="flex w-full flex-col   p-2 gap-1  rounded-sm">
                <label className='font-semibold text-primary ' htmlFor="email">Email</label>
                <input 
                className='border-[1px] border-dotted focus:outline-none
                px-4 py-2 rounded '
                placeholder='Enter Your Email'
                type="email"
                name="email" 
                id="email" />
            </div>
            <div className="flex w-full flex-col   p-2 gap-1  rounded-sm">
                <label className='font-semibold text-primary ' htmlFor="password">Password</label>
                <input  
                className='border-[1px] border-dotted focus:outline-none
                px-4 py-2 rounded '
                placeholder='Enter Your Password'
                type="password" name="password" id="password" />
            </div>
            <div className="flex p-2 w-full  ">
            <button className='flex rounded-md w-full bg-primary text-center justify-center font-semibold
            text-white p-2' type="submit">Login</button>
            </div>
            <div className="flex flex-col text-text_secondary items-center">
                <span className="">Forgat Password?</span> Or
                <div className=" flex gap-2 w-full items-center">
                    <span className="">Don't have account? </span>
                        <Link to='/' onClick={()=> setLogin(!login)} className='font-extrabold border-[1px] border-dotted p-1 rounded-sm text-[1.15rem]' > SignUp</Link>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default SignUp