import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="hero w-full h-screen bg-cover relative bg-center bg-no-repeat">
        <div className="z-10 w-full h-screen absolute bg-black/20" />
      <div className="container text-white text-center h-full py-20 flex flex-col relative justify-end items-center gap-6 z-50">
        <h1 className="md:text-[90px] text-[50px] w-full font-bold md:w-[500px] ">Wear What Defines You</h1>
        <p className="md:w-[250px] w-full text-lg ">A new era of streetwear Designed for everyone</p>
        <Link
          href="/shop"
          className="border-2 border-white rounded-lg bg-transparent px-4 py-2 "
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
