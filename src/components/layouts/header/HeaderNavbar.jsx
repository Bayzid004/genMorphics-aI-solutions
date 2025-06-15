'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const HeaderNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="container relative z-50 px-4 mx-auto">
      <div
        className="
          absolute w-full
          max-w-[1183px]
          left-0
          md:left-0
          lg:left-[250px]
          xl:left-[368px]
          -top-7
          bg-white
          flex flex-col md:flex-row
          items-start md:items-center
          justify-between
          py-3
          px-4
          gap-2 md:gap-6
        "
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/grandLandscapingLogoNavbar.webp"
            width={248}
            height={53}
            alt="callIconNavbar"
          />
        </div>

        {/* Right side: hamburger + button (flex row, justify-between on small screens) */}
        <div className="flex justify-between items-center w-full md:w-auto">
          {/* Hamburger button for small screens */}
          <button
            className="md:hidden block text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Free Estimate button */}
          <button className="text-white font-bold flex items-center gap-2 bg-[#7E3C07] px-5 py-2 rounded whitespace-nowrap ml-auto md:ml-0">
            <Image
              src="/phoneIconNavbar.webp"
              width={26}
              height={26}
              alt="callIconNavbar"
            />
            Free Estimate
          </button>
        </div>

        {/* Navigation menu below on small screens, inline on md */}
        <ul
          className={`
            flex-col md:flex-row flex
            md:items-center
            font-bold
            text-[16px] md:text-[17px]
            text-black
            text-center
            md:flex
            transition-max-height duration-300 ease-in-out
            overflow-hidden
            ${menuOpen ? 'max-h-[500px] mt-4' : 'max-h-0'}
            md:max-h-full md:mt-0
            gap-4 md:gap-6
            w-full md:w-auto
          `}
        >
          <li>
            <a href="/about" className="hover:text-[#7E3C07] transition block py-2 md:py-0">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-[#7E3C07] transition block py-2 md:py-0">
              Services
            </a>
          </li>
          <li>
            <a href="/work" className="hover:text-[#7E3C07] transition block py-2 md:py-0">
              Work
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:text-[#7E3C07] transition block py-2 md:py-0">
              Projects
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:text-[#7E3C07] transition block py-2 md:py-0">
              Blog
            </a>
          </li>
          <li>
            <a href="/contactUs" className="hover:text-[#7E3C07] transition block py-2 md:py-0">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderNavbar
