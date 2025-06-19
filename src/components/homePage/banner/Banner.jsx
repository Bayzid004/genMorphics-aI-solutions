import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col md:flex-row items-center justify-between h-full gap-8 px-4 sm:px-8 py-12'>
        {/* Left Text Content */}
        <div className='text-black max-w-xl'>
          <p className='text-base sm:text-lg lg:text-4xl font-light'>Maximize Your Data's Potential</p>
          <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-[52px] leading-snug sm:leading-snug md:leading-[60px] xl:leading-[70px] font-bold'>
            Unlock the <br className='hidden sm:block' /> Potential of :LLMs
          </h1>
          <p className='text-[15px] xl:text-base py-3 sm:py-4'>
            Unleash the Potential of Your Data with Expert Labeling High-quality, Targeted Training Data for Superior Model Performance
          </p>
        </div>

        {/* Right Form */}
        <div className='w-full sm:w-[420px]'>
          <Image src='/img/illustration/13.png' width={600} height={600} alt='banner image' />
        </div>
      </div>
    </div>
  )
}

export default Banner
