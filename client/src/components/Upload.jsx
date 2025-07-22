import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Upload = () => {
  const { removeBg } = useContext(AppContext)

  return (
    <div className='pb-20 px-4'>
      {/* Heading */}
      <h1 className='text-center text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent py-8'>
        See the Magic. Try it Now!
      </h1>

      {/* Upload Button */}
      <div className='text-center mt-6'>
        <input
          onChange={e => removeBg(e.target.files[0])}
          type='file'
          accept='image/*'
          id='upload2'
          hidden
        />
        <label
          htmlFor='upload2'
          className='inline-flex items-center gap-3 px-8 py-3 sm:px-10 sm:py-4 rounded-full cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 transition-transform duration-500 shadow-lg'
        >
          <img width={20} src={assets.upload_btn_icon} alt='Upload Icon' />
          <p className='text-white text-sm sm:text-base font-medium'>Upload your image</p>
        </label>
      </div>
    </div>
  )
}

export default Upload
