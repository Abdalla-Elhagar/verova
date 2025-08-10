

import React from 'react'
import shopImage from "../../../public/images/shopImage.png"
import Image from 'next/image'

export default function Poster() {
  return (
    <section className='px-5 mt-40 md:mt-28 mb-10'>
        <div className="container gap-5 flex justify-between items-center md:text-left text-center md:flex-row flex-col-reverse w-full min-h-[200px] xl:h-[300px] bg-gradient-to-r from-blue-700 to-sky-500 rounded-3xl">
            <div className="left md:h-[250px] flex flex-col justify-between items-center md:items-start">
                <h1 className='xl-text-[60px] lg:text-[50px] md:text-[30px] text-[25px] font-bold text-white mb-10'>Save Up to 50% On Your Favorite Productc</h1>
                <button className='px-6 mb-5 py-2 bg-black text-white rounded-full w-[150px]'>Buy Now</button>
            </div>
            <Image src={shopImage} alt="Shop Image"  className='w-[500px] xl:w-[300px] md:-mt-[150px] -mt-[300px]' />
            
        </div>
    </section>
  )
}
