import React from 'react'
import greenHoodie from '../../../public/images/bestSelers/greenHoodie.png'
import whiteShirt from '../../../public/images/bestSelers/whiteTShirt.png'
import blackTShirt from '../../../public/images/bestSelers/blackTShirt.png'
import Image from 'next/image'
import { HiOutlineShoppingBag } from "react-icons/hi2";



const bestSelersCards = [
    {
        image: greenHoodie,
        name:"Dark Green Hoodie",
        price:"45"
    },
    {
        image: whiteShirt,
        name:"White T-shirt",
        price:"45"
    },
    {
        image: blackTShirt,
        name:"Black T-shirt",
        price:"45"
    },
    
]

export default function BestSelers() {
    
  return (
    <section className='.container p-4 relative'>
        <h3 className='text-white font-thin text-[40px] absolute top-10 left-10'>Best sellers</h3>
        <ul className='flex justify-center gap-2 lg:flex-nowrap flex-wrap'>
            {bestSelersCards.map((ele,index)=> (
            <li className='lg:w-1/3 md:w-[calc(50%-16px)] w-full' key={index}>
                <Image src={ele.image} alt={ele.name} className='w-full h-[520px]' />
                <p className='px-1 my-2'>{ele.name}</p>
                <div className='flex justify-between px-1'>
                    <p className='font-semibold'>{ele.price}$</p>
                    <HiOutlineShoppingBag className='text-xl' />
                </div>
            </li>
        ))}
        </ul>
        
    </section>
  )
}
