import React from 'react'
import ProductCard from '../components/ProductCard'
import { Slider } from '@mui/material'
import { filter } from '../utils/data'

const FoodListing = () => {
  return (
    <>
    <div className=" ">
      <div className="container flex flex-col w-full h-full mx-auto  md:flex-row">
        <div className=" flex flex-[0.7] flex-col w-full px-6 sm:px-5  items-start ">
          <div className="flex flex-col justify-between   ">
            {filter.map((filter) => {
              return(
                <>
                <div className=" ">
                <h2 className=" font-semibold text-xl py-2 ">
                  {filter.name}
                </h2>
                <div className=" flex flex-wrap items-start gap-3 w-2/3 ">
                  {filter.items.map((item)=>{
                    return(
                      <button className=" border-separate border p-1 bg-menu_secondary_text rounded-md
                      cursor-pointer
                      ">
                    {item}
                  </button>
                    )
                  })}
                  
                </div>
                </div>
                </>
              )
            } ) }
          </div>
          <Slider
          className='flex w-full max-w-8/12'
          aria-label='price'
          min={0}
          max={1000}
          valueLabelDisplay='auto'
          marks={[
            {value:0, label: "$0" },
            {value:1000, label: "$1000" }
          ]}
          />
        </div>
        <div className=" flex flex-1 w-full ">
        <div className="grid grid-cols-2 md:grid-cols-3  grid-flow-row w-full gap-5 h-full p-5 items-center justify-center">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FoodListing