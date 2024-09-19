import React from 'react'
import ProductCard from '../components/ProductCard'

const Favorites = () => {
  return (
    <>
    <div className="">
      <div className="container w-full h-full flex flex-col items-center justify-center mx-auto">
          <h1 className='text-4xl sm:text-6xl border-b-2 py-2 border-primary font-semibold'>Your Favorites</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-sm:grid-cols-1  grid-flow-row w-full gap-5 h-full p-5 items-center justify-center">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Favorites