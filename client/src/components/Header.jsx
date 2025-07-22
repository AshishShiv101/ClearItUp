import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Header = () => {
  const { removeBg } = useContext(AppContext)

  return (
    <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4 pt-12 lg:px-44 sm:pt-20'>
      {/* Left Section */}
      <div className='text-center lg:text-left'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-800 leading-tight'>
          Remove the <br className='hidden md:inline' />
          <span className='bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent'>
            background
          </span>{' '}
          from <br className='hidden md:inline' />
          images for free
        </h1>

        {/* Descriptive Text */}
        <div className='my-6 space-y-2 text-sm sm:text-base text-gray-600'>
          <p>No more messy backgrounds – get clean, professional images instantly.</p>
          <p>Powered by advanced AI to give you perfect edge detection.</p>
          <p>Fast, free, and no signup required – just upload and go!</p>
        </div>

        {/* Upload Button */}
        <div className='mt-6'>
          <input
            onChange={e => removeBg(e.target.files[0])}
            type='file'
            accept='image/*'
            id='upload1'
            hidden
          />
          <label
            htmlFor='upload1'
            className='inline-flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-full cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-500 hover:scale-105 transition-transform duration-500 shadow-md'
          >
            <img width={20} src={assets.upload_btn_icon} alt='Upload Icon' />
            <p className='text-white text-sm sm:text-base font-medium'>Upload your image</p>
          </label>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className='w-full max-w-sm sm:max-w-md'>
        <img src={assets.header_img} alt='Header' className='w-full object-contain' />
      </div>
    </div>
  )
}

export default Header
