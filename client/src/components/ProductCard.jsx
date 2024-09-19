import { FavoriteRounded, ShoppingBagOutlined } from '@mui/icons-material'
import { Rating } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <>
    <div className="flex w-full h-full flex-col overflow-x-hidden ">
        <div className="flex relative group flex-col w-full h-full border-dotted border rounded items-start justify-center ">
            <div className=" flex w-full h-60 max-sm:h-80 sm:max-h-72 md:h-80 ">
                <img className='h-full w-full rounded-t object-cover'
                src="https://imgs.search.brave.com/RbqUgnkCNI1pYxSpQj26tf4CpQouIUJ-8VVBnyRGk00/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTAx/OTYzNTg3L3Bob3Rv/L2J1cmdlci1jaGVl/c2UuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXlnTlQwd1lz/MUFILVlsbjI4aU9i/cU5ocUgyWkhwcHda/OHBsbnpjMmpXbW89" alt="" />
            </div>
            <div className="absolute top-16 translate-x-14 group-hover:-translate-x-0 group-hover:duration-300 duration-300 group-hover:flex flex-col hidden  w-max items-center justify-center
             gap-8 right-4 bg-transparent ">
                <Link to='/favorite' className="p-[6px] bg-bg rounded-full ">
                    <FavoriteRounded className='text-primary m' sx={{fontSize:"25px"}}/>
                </Link>
                <Link to="/cart" className="p-[6px] bg-bg rounded-full ">
                    <ShoppingBagOutlined sx={{fontSize:"25px"}}/>
                </Link>
            </div>
            <div className="w-max left-4 rounded p-[2px] bg-opacity-70 hover:bg-opacity-85
             flex text-4xl absolute bottom-28 bg-bgLight ">
            <Rating value="2.5" sx={{fontSize:"25px"}}  />
            </div>
            <div className="flex flex-col w-full p-5 gap-1 ">
                <div className="flex w-full items-center justify-between">
                <h3 className="   font-bold text-xl">Burger</h3>
                <h4 className=" font-semibold text-md text-text_secondary ">Burger desc</h4>
                </div>
                <div className="  w-full items-center justify-between flex gap-5  ">
                <span className=' font-bold gap-3 flex items-center text-md' >$12
                <del className='text-sm text-text_secondary' >$20</del>
                </span>
                <span className='text-secondary font-semibold text-sm ' >(20% off)</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductCard