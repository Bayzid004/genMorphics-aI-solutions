'use client'

import Image from 'next/image'
import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import HeadingIcon from '@/components/common/HeadingIcon'
import { HeadingIconText } from '@/components/common/HeadingIconText'

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 16
  },
  640: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 24
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 24
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 30
  },
  1536: {
    slidesPerView: 3,
    spaceBetween: 30
  }
}

const services = [
  {
    id: '01',
    img: '/homePageChooseUsImage1.webp',
    title: 'Excellent Reviews',
    para: 'People love working with us! How do we know? Because they told us so! Check out all our 10/10 reviews on Homestar.com.'
  },
  {
    id: '02',
    img: '/homePageChooseUsImage2.webp',
    title: 'Free, At Home Consultations',
    para: "Curious about how much a project will cost? Book a free consultation. We'll come to your house, take measurements and get back to you quickly with an estimate."
  },
  {
    id: '03',
    img: '/homePageChooseUsImage3.webp',
    title: 'Quality Craftmanship',
    para: 'Our small team has decades of experience in landscape construction. Our work is beautifully detailed and durable - adding beauty and value to your home.'
  },
  {
    id: '04',
    img: '/homePageChooseUsImage4.webp',
    title: 'Affordable',
    para: 'We offer very competitive rates. Our team is small and skilled, so we can complete projects with maximum efficiency.'
  }
]

const ChooseUs = () => {
  return (
    <div className='container full__section_x px-4 sm:px-6 lg:px-8'>
      <div className='py-10 sm:py-14'>
        <div className='flex flex-col items-center text-center mb-6'>
          <div className='flex justify-center items-center mb-2'>
            <HeadingIcon text={HeadingIconText.chooseUs} />
          </div>
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[35px] leading-snug font-bold text-black'>
            Why Choose Us
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            stopOnLastSlide: false
          }}
          speed={2000}
          allowTouchMove={true}
          breakpoints={breakpoints}
        >
          {services.map(({ img, title, para }, index) => (
            <SwiperSlide key={index} className='!h-auto px-1'>
              <div className='border border-[#e0dfdf] rounded-2xl bg-white mt-10 sm:mt-6 h-full'>
                <div className='space-y-3 px-5 py-6 sm:px-6 sm:py-7'>
                  <Image
                    src={img}
                    width={57}
                    height={57}
                    alt='Experience'
                    className='w-[45px] sm:w-[57px] h-auto'
                  />
                  <p className='text-base sm:text-lg font-bold'>{title}</p>
                  <p className='text-sm sm:text-base leading-6 text-gray-700'>{para}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ChooseUs
