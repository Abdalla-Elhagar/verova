import React from 'react'

const contactLinks = [
    {
        title:"Hello@Vérova.com",
        link: "#"
    },
    {
        title:"Sabermoatz477@gmail.com",
        link: "#"
    },
    {
        title:"+020 11106 43006",
        link: "#"
    },
    
]

const socialMediaLinks = [
    
        {
        title:"Facebook",
        link: "#"
    },
    {
        title:"Instgram",
        link: "#"
    },
    {
        title:"You tube",
        link: "#"
    },
    
]

const companyLinks = [
     {
        title:"News & update",
        link: "#"
    },
    {
        title:"About us",
        link: "#"
    },
    {
        title:"Carrers",
        link: "#"
    },
]

const termsAndPolicy = [
    {
        title:"Privacy policy",
        link: "#"
    },
    {
        title:"Terms of use",
        link: "#"
    },
    {
        title:"Accessibility",
        link: "#"
    },
]

export default function Footer() {

  return (
    <footer className=' min-h-[300px] mt-10'>
        <div className="container ">
            <div className="top flex justify-center lg:justify-between items-start gap-20 md:text-start text-center  flex-wrap ">
                <div className="contact">
                    <h3 className='text-2xl font-semibold mb-3'>Contact</h3>
                    <ul className='flex flex-col items-start gap-1'>
                        {contactLinks.map((l,index)=> (
                            <li className="w-full" key={index}>{l.title}</li>
                        ))}
                    </ul>
                </div>
                

                <div className="Social">
                    <h3 className='text-2xl font-semibold mb-3'>Social Media</h3>
                    <ul className='flex flex-col items-end gap-1'>
                        {socialMediaLinks.map((l,index)=> (
                            <li className="w-full" key={index}>{l.title}</li>
                        ))}
                    </ul>
                </div>
                

                <div className="Company">
                    <h3 className='text-2xl font-semibold mb-3'>Company</h3>
                    <ul className='flex flex-col items-end gap-1'>
                        {companyLinks.map((l,index)=> (
                            <li className="w-full" key={index}>{l.title}</li>
                        ))}
                    </ul>
                </div>
                

                <div className="Terms">
                    <h3 className='text-2xl font-semibold mb-3'>Terms & Policy</h3>
                    <ul className='flex flex-col items-end gap-1'>
                        {termsAndPolicy.map((l,index)=> (
                            <li className="w-full" key={index}>{l.title}</li>
                        ))}
                    </ul>
                </div>
                

                
            </div>
            <div className="bottom h-[200px] flex justify-between items-end">
                <div className="logo text-[90px] font-bold text-main leading-none">Vérova</div>
                <p className='text-sm'>© All rights reserved Fradel <span className='text-main'>Vérova</span> 2025</p>
            </div>
        </div>
    </footer>
  )
}
