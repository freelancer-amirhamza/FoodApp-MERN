import React from 'react';
import {category} from "../utils/data.js";
import HeaderImage from '../utils/Images/Header.png';
import ProductCard from '../components/ProductCard.jsx';

const Home = () => {
  return (
    <>
    <div className="w-full h-auto flex items-center justify-center mx-auto ">
      <div className="container w-full items-center  max-sm:px-2 justify-center flex flex-col ">
        <div className="">
          <img src={HeaderImage} alt="" />
        </div>
        <div className="w-full items-center justify-center flex flex-col ">
        <h1 className="text-4xl sm:text-6xl border-b-2 py-2 border-primary font-semibold "> Food Categories</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-sm:grid-cols-1  grid-flow-row w-full gap-5 h-full p-5 items-center justify-center ">
          {category.map((category, index)=>{
            return(
              <>
              <div key={index} className="relative  h-full w-full border border-dotted rounded-md bg-bg flex flex-col items-center justify-center ">
                <div className="flex items-center justify-center  w-full h-60 max-sm:h-80 sm:h-72 md:h-80  ">
                <img className='w-full h-full object-cover rounded-md ' src={category.img} alt="food" />
                </div>
                <span className="absolute bg-bg hover:bg-primary cursor-pointer bottom-8 rounded-lg flex px-4 font-semibold t py-2 text-xl">{category.name} </span>
                <span className="absolute bg-green top-2 cursor-pointer px-2 rounded-3xl right-2  py-1  font-mono">{category.off} </span>
              </div>
              </>
            )
          })}
        </div>
        </div>

        {/* Popular food  */}
        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-sm:grid-cols-1  grid-flow-row w-full gap-5 h-full p-5 items-center justify-center">
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

export default Home