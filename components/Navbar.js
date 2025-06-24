import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='bg-white w-[90vw] z-30 flex justify-between fixed top-10 right-[5vw] rounded-full p-3.5 ps-[44px]'>
            <div className="logo flex items-center gap-20">
                <Link href="/" aria-current="page" aria-label="home">
                    <img loading="eager" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" className=" h-9" />
                </Link>
                <ul className='flex gap-10 items-center'>
                    <li className=' cursor-pointer'>Products</li>
                    <li className=' cursor-pointer'>Templates</li>
                    <li className=' cursor-pointer'>Marketplace</li>
                    <li className=' cursor-pointer'>Learn</li>
                    <li className=' cursor-pointer'>Pricing</li>
                </ul>
            </div>
            <div className='flex gap-4 items-center'>
                <button className='login bg-[#eff0ec] p-4 rounded-lg cursor-pointer'>Log in</button>
                <button className='signup bg-black text-white p-4 rounded-full font-bold cursor-pointer'>Sign up free</button>
            </div>
        </nav>
    )
}
