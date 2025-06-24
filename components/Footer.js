import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#502274] min-h-[100vh] w-full flex-col pt-20">
            <div className='w-full flex flex-col justify-center text-center text-[56px] font-extrabold  text-[#e9c0e9]'>
                <h2 >Jumpstart your corner of the

                </h2>
                <span>internet today</span>
                {/* <div className='w-full'></div> */}
            </div>
            <div className=" w-full flex justify-center mt-10 items-center gap-4">
                <input className=" min-w-[290px] bg-white text-[#757575] rounded px-4 py-3 focus:outline-green-300 text-[16px]" placeholder="bittr.ee/" type="text" />
                <button className=" px-[26px] text-[16px] py-[20px] text-black font-semibold rounded-4xl bg-[#d2e823] cursor-pointer">Claim your Bittree</button>
            </div>
            <div className="max-w-7xl mt-12 mx-auto flex flex-col md:flex-row md:justify-between items-start md:items-center space-y-8 md:space-y-0">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-[#e9c0e9]">Linktree</h2>
                    <p className="mt-2 text-sm text-gray-300 max-w-xs">
                        Share all your links with one URL. Connect your audience to all of your content with just one link.
                    </p>
                </div>

                {/* Footer Navigation Links */}
                <div className="flex flex-wrap gap-8">
                    <div className="space-y-2">
                        <h3 className="font-semibold text-[#e9c0e9]">Company</h3>
                        <ul className="text-sm text-gray-300 space-y-1">
                            <li><a href="#" className="hover:text-white transition">About</a></li>
                            <li><a href="#" className="hover:text-white transition">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-semibold text-[#e9c0e9]">Support</h3>
                        <ul className="text-sm text-gray-300 space-y-1">
                            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>

                {/* Social Media */}
                <div className="flex space-x-4 text-2xl text-[#e9c0e9]">
                    <a href="#"><FaInstagram className="hover:text-white transition" /></a>
                    <a href="#"><FaTwitter className="hover:text-white transition" /></a>
                    <a href="#"><FaLinkedin className="hover:text-white transition" /></a>
                    <a href="#"><FaYoutube className="hover:text-white transition" /></a>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-gray-300">
                © {new Date().getFullYear()} Linktree. All rights reserved.
            </div>
        </footer>
    )
}
