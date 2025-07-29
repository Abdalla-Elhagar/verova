import Link from 'next/link'
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


export default function LastSection() {
  return (
    <section className='last-home-page-section w-full h-screen bg-cover relative bg-center bg-no-repeat'>
        <div className="z-10 w-full h-screen absolute bg-black/20 flex justify-end items-center flex-col text-center py-10 gap-6">
        <h1 className='lg:text-[90px] text-[60px] w-full md:w-[700px] text-white font-bold'>The Future of Comfort Awaits</h1>
        <Link href={"/shop"} className="bg-white w-[150px] h-[40px] rounded-full flex justify-center items-center gap-4">
            <p>Buy Now</p>
            <GoArrowUpRight className=' text-3xl bg-main text-white rounded-full p-1' />
            

        </Link>
        </div>
    </section>
  )
}
