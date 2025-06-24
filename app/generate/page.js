import React from 'react'

export default function Generate() {
    return (
        <div className='bg-white min-h-screen grid grid-cols-2'>
            <div className='col1 flex justify-center items-center flex-col'>
                <h1 className='font-bold text-4xl text-gray-700'>Create your Bittree</h1>
                <div className='flex flex-col gap-5 my-6'>
                    <h2 className='font-semibold text-2xl'>Step:1 Claim your handle</h2>
                    <div>
                        <input className='px-4 py-4 focus:outline-black-300 bg-gray-100 rounded' type="text" placeholder='Choose a handle' />
                    </div>
                    <h2 className='font-semibold text-2xl'>Step:2 Add Links</h2>
                    <div className='flex gap-2'>
                        <input className='px-4 py-4 focus:outline-black-300 bg-gray-100 rounded' type="text" placeholder='Enter link text' />
                        <input className='px-4 py-4 focus:outline-black-300 bg-gray-100 rounded' type="text" placeholder='Enter link' />
                        <button className='px-5 py-3 text-2xl rounded-3xl text-white cursor-pointer bg-blue-400 font-bold'>Add Link</button>
                    </div>
                    <h2 className='font-semibold text-2xl'>Step:3 Add Profile and Finalize</h2>
                    <div className=' mx-4 flex flex-col gap-2'>
                        <input className='px-4 py-4 focus:outline-black-300 bg-gray-100 rounded' type="text" placeholder='Enter link to ypur Picture' />
                        <button className='px-5 py-3 text-2xl rounded-3xl text-white cursor-pointer bg-blue-400 font-bold'>Create your BitLink</button>
                    </div>
                </div>
            </div>
            <div className='col2 bg-[#225ac0] w-full h-screen flex justify-center items-center'>
                {/* <img src="/login_banner.webp" className='h-full object-contain' alt="" /> */}
                <img src="/image.png" className='h-full object-contain' alt="" />
            </div>
        </div>
    )
}
