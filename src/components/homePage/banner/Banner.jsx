import React from 'react'
import Image from 'next/image'
import GetInTouchForm from '@/components/common/form/GetInTouchForm'

const Banner = () => {
  return (
    <div className='full__section_x relative w-full h-auto xl:h-[750px]'>
      <Image
        src='/homePageBannerBg.webp'
        alt='Hero background'
        fill
        priority
        style={{ objectFit: 'cover' }}
        className='z-0'
      />
      <div className='absolute inset-0 bg-black/40 z-10'></div>
      <div className='relative z-20 flex flex-col md:flex-row items-center justify-between h-full gap-8 px-4 sm:px-8 py-12'>
        {/* Left Text Content */}
        <div className='text-white max-w-xl'>
          <p className='text-[#E8D255] text-base sm:text-lg'>Landscaping</p>
          <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-[52px] leading-snug sm:leading-snug md:leading-[60px] xl:leading-[70px] font-bold'>
            Landscaping, <br className='hidden sm:block' /> interlocking & more!
          </h1>
          <p className='text-sm sm:text-base md:text-lg py-3 sm:py-4'>
            Expert landscaping and interlocking for stunning, lasting outdoor
            spaces.
          </p>
          <hr className='border-gray-300 my-2 sm:my-4' />
          <p className='font-semibold pt-2 sm:pt-4 pb-1 sm:pb-2 text-base sm:text-lg'>Trust Us:-</p>
          <Image
            src='/bannerHomeStarsBtn.webp'
            width={236}
            height={32}
            alt='bannerHomeStarsBtn'
          />
          <button className='text-white font-bold flex items-center gap-2 bg-[#7E3C07] px-4 sm:px-5 py-2 sm:py-3 rounded mt-6 sm:mt-8 text-sm sm:text-base'>
            <Image
              src='/phoneIconNavbar.webp'
              width={22}
              height={22}
              alt='callIconNavbar'
            />
            Free Estimate
          </button>
        </div>

        {/* Right Form */}
        <div className='w-full sm:w-[420px]'>
          <GetInTouchForm />
        </div>
      </div>
    </div>
  )
}

export default Banner
