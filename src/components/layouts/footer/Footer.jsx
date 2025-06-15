import Image from 'next/image'
import Link from 'next/link'

import { footerLinks } from './Footer.utilities'

const socialIcons = [
  '/footerInstagramIcon.webp',
  '/footerYoutubeIcon.webp',
  '/footerLinkedinIcon.webp',
  '/footerFacebookIcon.webp'
]
const Footer = () => {
  return (
    <div className='container'>
      <div className='full__section_x footer__bg '>
        <footer className='px-5 lg:px-[35px] !text-black !z-50 pt-[20px] md:pt-[27px] pb-[17px]'>
          <div className=''>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-[17px] justify-center'>
              <div className='w-full lg:w-auto'>
                <div className='mx-auto pb-4 flex justify-start'>
                  <Image
                    src='/grandLandscapingLogoNavbar.webp'
                    alt='footer logo'
                    width={248}
                    height={53}
                  />
                </div>
                <p className='text-black font-bold leading-[200%] text-start'>
                  Enhance Your Outdoors with Grand Landscaping & Interlocking
                </p>
                <p className='text-black pb-6 leading-[200%] text-start'>
                  We design and build stunning, long-lasting outdoor
                  spaces—driveways, patios, stairs, and more.
                </p>
                {/* social icon */}
                <div className='flex items-center justify-start gap-[15px]'>
                  {socialIcons?.map((icon, index) => {
                    return (
                      <div key={index} className=''>
                        <Image
                          src={icon}
                          alt='social icon'
                          width={55}
                          height={55}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Mapping through footer links */}
              {footerLinks.map((category, index) => (
                <div
                  key={index}
                  className={` text-start ${
                    category.cat === 'News' ? 'justify-self-center' : ''
                  }`}
                >
                  <p className='text-black !text-xl mb-3 md:mb-5 font-bold'>
                    {category.cat}
                  </p>
                  <ul>
                    {category.links.map((link, idx) => (
                      <li key={idx} className='mb-4 md:mb-9'>
                        <Link href={link.url}>
                          <span className='text-black !text-base !font-normal'>
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className='w-full lg:w-auto text-start'>
                <p className='text-black !text-xl mb-3 md:mb-5 font-bold'>
                  Contact Us
                </p>

                <ul className=''>
                  <li className='flex items-center gap-[15px] text-black text-base font-normal leading-[25px]'>
                    {' '}
                    <Image
                      src='/locationIcon.webp'
                      alt='map icon'
                      width={28}
                      height={28}
                    />{' '}
                    <Link
                      className='text-black'
                      href='location:43 Rachel Crescent , Markham, ON, L6C 1R8'
                    >
                      43 Rachel Crescent , Markham, ON, L6C 1R8
                    </Link>{' '}
                  </li>
                  <li className='flex items-center gap-[15px] text-black text-base font-normal leading-[25px] py-[15px] md:py-[30px]'>
                    {' '}
                    <Image
                      src='/phoneIcon.webp'
                      alt='phone icon'
                      width={28}
                      height={28}
                    />{' '}
                    <Link className='text-black' href='tel:(647) 786-9642'>
                      (647) 786-9642
                    </Link>
                  </li>
                  <li className='flex items-center gap-[15px] text-black text-base font-normal leading-[25px]'>
                    {' '}
                    <Image
                      src='/emailIcon.webp'
                      alt='mail icon'
                      width={28}
                      height={28}
                    />{' '}
                    <Link
                      className='text-black text-xs md:text-[13px] 2xl:text-base'
                      href='mailto:grandlandscapinginterlocking@gmail.com'
                    >
                      grandlandscapinginterlocking@gmail.com
                    </Link>
                  </li>
                  <li className='flex items-center gap-[15px] text-black text-base font-normal leading-[25px] pt-[15px] md:pt-[30px]'>
                    <Image
                      src='/clockIcon.webp'
                      alt='clock icon'
                      width={28}
                      height={28}
                    />{' '}
                    <span className='text-black'>
                      <strong>Mon & SUN</strong> by Appointment <br />{' '}
                      <strong>TUE - SAT</strong> (10am - 7pm)
                    </span>
                  </li>
                </ul>

                <div className='block md:hidden'>
                  <div className='h-[1px] bg-[#8E8E8E] w-full mt-9 mb-4' />
                  <div className='text-center lg:text-left'>
                    <p className='text-sm lg:text-base text-black'>
                      © 2022 Grand Landscaping and Interlocking.
                    </p>
                    <ul className='text-sm lg:text-base flex justify-evenly gap-2 mt-4'>
                      <li className='text-white'>
                        <Link href='/' className='text-black'>
                          Terms & Condition
                        </Link>
                      </li>
                      <li className='text-white'>
                        <Link href='/' className='text-black'>
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* footer bottom part  */}
            <div className='hidden md:block border-t border-[#252525] mt-5'>
              <div className='w-full flex items-center justify-between mt-4'>
                <div className='text-center lg:text-left hidden md:block'>
                  <p className='text-sm lg:text-base text-black font-bold'>
                    © 2022 Grand Landscaping and Interlocking.
                  </p>
                </div>
                <div className='text-center lg:text-right hidden md:block'>
                  <ul className='text-sm lg:text-base flex justify-evenly gap-5'>
                    <li className='text-black font-bold'>
                      <Link href='/terms-and-conditions' className='text-black'>
                        Terms & Condition
                      </Link>
                    </li>
                    <li className='text-white font-bold'>
                      <Link href='/' className='text-black'>
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* creater company credit */}
      <div className=''>
        <div className='container bg-[#7E3C07] flex justify-center items-center py-2'>
          <div className='flex justify-center items-center mb-2 lg:mb-0'>
            <p className='text-sm md:text-base font-semibold text-white mr-[14px] lg:mr-4'>
              WEBSITE DESIGN AND SEO BY :-
            </p>
            <Image
              src='/goKundu.webp'
              alt='Gokundo'
              width={141}
              height={36}
              className='w-[114px] h-[30px] md:w-[141px] md:h-9'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
