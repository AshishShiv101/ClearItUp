import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
    return (
        <div className='mx-4 lg:mx-44 py-20'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                Steps to remove background <br /> from an image in seconds
            </h1>

            <div className='flex flex-col md:flex-row gap-6 mt-16 xl:mt-24 items-center justify-center'>
                {/* Step 1: Upload */}
                <div className='flex items-start gap-4 bg-white border border-gray-100 shadow-lg p-6 rounded-xl w-full max-w-md hover:scale-105 transition-transform duration-500'>
                    <img className='w-10 h-10' src={assets.upload_icon} alt='Upload Icon' />
                    <div>
                        <p className='text-xl font-semibold text-gray-800'>Upload Image</p>
                        <p className='text-sm text-gray-600 mt-1'>
                            Choose any image from your device that you’d like to remove the background from.
                        </p>
                    </div>
                </div>

                {/* Step 2: Remove */}
                <div className='flex items-start gap-4 bg-white border border-gray-100 shadow-lg p-6 rounded-xl w-full max-w-md hover:scale-105 transition-transform duration-500'>
                    <img className='w-10 h-10' src={assets.remove_bg_icon} alt='Remove BG Icon' />
                    <div>
                        <p className='text-xl font-semibold text-gray-800'>Remove Background</p>
                        <p className='text-sm text-gray-600 mt-1'>
                            Our AI automatically detects the subject and removes the background with precision.
                        </p>
                    </div>
                </div>

                {/* Step 3: Download */}
                <div className='flex items-start gap-4 bg-white border border-gray-100 shadow-lg p-6 rounded-xl w-full max-w-md hover:scale-105 transition-transform duration-500'>
                    <img className='w-10 h-10' src={assets.download_icon} alt='Download Icon' />
                    <div>
                        <p className='text-xl font-semibold text-gray-800'>Download Image</p>
                        <p className='text-sm text-gray-600 mt-1'>
                            Download your high-quality, background-free image instantly—no watermark, no hassle.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps
