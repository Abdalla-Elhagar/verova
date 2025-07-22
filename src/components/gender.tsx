import React from 'react'

export default function Gender() {
  return (
    <section className='gender text-white flex md:flex-row flex-col'>
        <div className="left men bg-cover bg-center w-full md:w-1/2 h-screen relative">
        <h2 className='text-[60px] absolute left-6 bottom-10'>Men’s</h2>
        </div>
        <div className="right women bg-cover bg-center w-full md:w-1/2 h-screen relative">
        <h2 className='text-[60px] absolute left-6 bottom-10'>Woman’s</h2>
        </div>
    </section>
  )
}
