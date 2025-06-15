import React from 'react'
import Image from 'next/image'

const UpperNavbar = () => {
  return (
    <div className='full__section_x hidden md:flex justify-between pt-3 pb-12'>
      <div>
        <p className='text-sm font-bold text-white'>
          We provide landscaping and construction services
        </p>
      </div>
      <div className='flex gap-4 text-white text-sm items-center'>
        <p>43 Rachel Crescent , Markham, ON, L6C 1R8</p>
        <p>/</p>
        <div className='flex items-center gap-2'>
          <Image
            src='/callIconNavbar.webp'
            width={16}
            height={16}
            alt='callIconNavbar'
          />
          <p>(647) 786-9642</p>
        </div>
        <p>/</p>
        <div className='flex items-center gap-2'>
          <Image
            src='/clockIconNavbar.webp'
            width={16}
            height={16}
            alt='clockIconNavbar'
          />
          <p>Mon-Sat: 07:00 - 17:00</p>
        </div>
        <p>/</p>
        <Image
          src='/facebookIconNavbar.webp'
          width={12}
          height={12}
          alt='facebookIconNavbar'
        />
        <Image
          src='/instagramIconNavbar.webp'
          width={16}
          height={12}
          alt='instagramIconNavbar'
        />
      </div>
    </div>
  )
}

export default UpperNavbar
