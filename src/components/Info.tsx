import { BiWorld } from 'react-icons/bi';
import { FaArrowRotateLeft } from 'react-icons/fa6';
import { IoIosLock } from 'react-icons/io';
import { GiTrophy } from 'react-icons/gi';

import React from 'react'

const Info = () => {
  return (
    <div className='mt-2 py-5'>
      <div className='main-container flex justify-between max-md:grid-2 max-md:gap-x-20 max-gap-y-10'>
        <div className='flex items-center gap-2 uppercase text-sm'>
                <BiWorld className='text-3xl' />
                <span>Free Shipping WorldWide</span>
        </div>
        <div className='flex items-center gap-2 uppercase text-sm'>
                <FaArrowRotateLeft className='text-3xl' />
                <span>Mony Back Guarenteed</span>
        </div>
        <div className='flex items-center gap-2 uppercase text-sm'>
                <IoIosLock className='text-3xl' />
                <span>Secure Online Payments</span>
        </div>
        <div className='flex items-center gap-2 uppercase text-sm'>
                <GiTrophy className='text-3xl' />
                <span>Best Premium Quality</span>
        </div>
      </div>
    </div>
  )
}

export default Info;
