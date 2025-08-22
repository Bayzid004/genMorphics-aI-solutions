"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const HeaderNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Add scroll padding to all anchor targets
  useEffect(() => {
    // Add CSS to create scroll-margin for all section elements
    const style = document.createElement('style');
    style.textContent = `
      section {
        scroll-margin-top: 100px;
      }
      @media (max-width: 768px) {
        section {
          scroll-margin-top: 80px;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container px-7 mx-auto">
        <div
          className="
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
            <a href="/#">
              <Image
                src="/img/logo2.png"
                width={248}
                height={53}
                alt="callIconNavbar"
              />
            </a>
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
              ${menuOpen ? "max-h-[500px] mt-4" : "max-h-0"}
              md:max-h-full md:mt-0
              gap-4 md:gap-6
              w-full md:w-auto
              no-underline
            `}
          >
            <li>
              <a
                href="/#"
                className="text-black no-underline hover:no-underline hover:text-[#cf4697] transition block py-2 md:py-0"
                onClick={handleLinkClick}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#whychooseus"
                className="text-black no-underline hover:no-underline hover:text-[#cf4697] transition block py-2 md:py-0"
                onClick={handleLinkClick}
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="#ourservices"
                className="text-black no-underline hover:no-underline hover:text-[#cf4697] transition block py-2 md:py-0"
                onClick={handleLinkClick}
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#ourprojects"
                className="text-black no-underline hover:no-underline hover:text-[#cf4697] transition block py-2 md:py-0"
                onClick={handleLinkClick}
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                className="text-black no-underline hover:no-underline hover:text-[#cf4697] transition block py-2 md:py-0"
                onClick={handleLinkClick}
              >
                TESTIMONIALS
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-black no-underline hover:no-underline hover:text-[#cf4697] transition block py-2 md:py-0"
                onClick={handleLinkClick}
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbar;