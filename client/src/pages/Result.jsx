import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const { resultImage, image, resetImageData } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
      <div className='bg-white rounded-lg px-6 sm:px-8 py-6 drop-shadow-sm'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Original Image */}
          <div>
            <p className='font-semibold text-gray-600 mb-2'>Original</p>
            {image && (
              <img
                className='rounded-md border'
                src={image instanceof File ? URL.createObjectURL(image) : image}
                alt='Original'
              />
            )}
          </div>

          {/* Result Image */}
          <div className='flex flex-col'>
            <p className='font-semibold text-gray-600 mb-2'>Result</p>
            <div className='rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden'>
              {resultImage ? (
                <img
                  src={resultImage}
                  alt='Result'
                  className='w-full h-auto animate-fadeIn'
                />
              ) : (
                image && (
                  <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
                    <div className='border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin'></div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Action Buttons */}
          {resultImage && (
            <div className='col-span-1 md:col-span-2 flex justify-end items-center flex-wrap gap-4 mt-6'>
              <button
                className='px-8 py-2.5 text-violet-600 text-sm rounded-full hover:scale-105 transition-all duration-700'
                onClick={() => {
                  resetImageData();
                  navigate('/'); // go back to upload page
                }}
              >
                Try another image
              </button>
              <a
                href={resultImage}
                download
                className='px-8 py-2.5 text-white text-sm bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700'
              >
                Download Image
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Result;
