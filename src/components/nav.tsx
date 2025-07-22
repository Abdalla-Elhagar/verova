"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { BsHandbag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useRouter, usePathname } from 'next/navigation'; 

export default function Nav() {
    const router = useRouter();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);



    const links = [
        {
            name:"Home",
            pathName:"/",
        },
        {
            name:"Men's",
            pathName:"/men",
        },
        {
            name:"Women's",
            pathName:"/women",
        },
        {
            name:"Shop",
            pathName:"/shop",
        },
        
    ]

    return (
        <>
            {/* Hamburger Button (Mobile Only) */}
            <button
                className="fixed top-4 left-4 z-[100] sm:hidden bg-white p-2 rounded-full shadow-md"
                onClick={() => setOpen(true)}
                aria-label="Open navigation"
            >
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 8h20M4 16h20" />
                </svg>
            </button>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 sm:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Side Navbar (Mobile) & Top Navbar (Desktop) */}
            <nav
                className={`
                    px-4
                    fixed left-0 top-0 h-full w-64 bg-white border-r shadow-lg z-50 flex flex-col items-center justify-between py-6
                    transition-transform duration-300
                    ${open ? 'translate-x-0' : '-translate-x-full'}
                    sm:static sm:translate-x-0 sm:w-full sm:h-16 sm:flex-row sm:justify-between sm:items-center sm:shadow-none sm:border-0 sm:px-10
                `}
                style={{ paddingBottom: '1rem', paddingTop: '1rem' }}
            >
                {/* Close Button (Mobile Only) */}
                <button
                    className="absolute top-4 right-4 sm:hidden bg-gray-100 p-2 rounded-full"
                    onClick={() => setOpen(false)}
                    aria-label="Close navigation"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 6l12 12M6 18L18 6" />
                    </svg>
                </button>

                {/* Top/Side Links */}
                <ul className="flex flex-col gap-8 items-center sm:flex-row sm:gap-4 sm:pl-4">
                    {links.map((link,index) => (
                        <li key={index}>
                        <Link
                            href={link.pathName}
                            className={`font-medium transition-colors duration-200 px-2 pb-1
                                ${pathname === link.pathName ? 'border-b-2 border-blue-500 text-blue-600' : 'text-blue-600 hover:text-blue-500'}
                            `}
                            onClick={() => setOpen(false)}
                        >
                            <span className="hidden sm:inline">{link.name}</span>
                            <span className="sm:hidden">{link.name}</span>
                        </Link>
                    </li>
                    ))}
                    
                    
                </ul>
                {/* Brand */}
                <div className="flex justify-center items-center sm:static sm:order-none">
                    <p className="hidden sm:flex text-blue-500 text-[32px] w-[168px] h-[55px] items-center justify-center">
                        Vérova
                    </p>
                    <p className="flex sm:hidden text-blue-500 text-[32px] w-[168px] h-[55px] items-center justify-center">
                        Vérova
                    </p>
                </div>
                {/* Bottom/Side Icons & Button */}
                <ul className="flex flex-col gap-6 items-center sm:flex-row sm:gap-4 sm:pr-4">
                    <li className="flex flex-col gap-6 items-center sm:flex-row sm:gap-4">
                        <Link href="/" className="hover:bg-cyan-50 rounded-full p-2 transition-colors duration-200" onClick={() => setOpen(false)}>
                            <CiSearch style={{ fontSize: "28px"}} />
                        </Link>
                        <Link href="/cart" className="hover:bg-cyan-50 rounded-full p-2 transition-colors duration-200" onClick={() => setOpen(false)}>
                            <BsHandbag style={{ fontSize: "28px"}} />
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={() => { setOpen(false); router.push('/login'); }}
                            className="
                                bg-gradient-to-r  bg-blue-500 text-white font-semibold 
                                rounded-xl shadow-md transition-all duration-200
                                flex items-center justify-center
                                w-32 h-10 px-4 py-2
                                hover:bg-cyan-600
                            "
                            aria-label="Login"
                        >
                            <span className="sm:hidden text-lg">Login</span>
                            <span className="hidden sm:inline text-lg">Login</span>
                        </button>
                    </li>   
                                
                </ul>
            </nav>
        </>

    );
}