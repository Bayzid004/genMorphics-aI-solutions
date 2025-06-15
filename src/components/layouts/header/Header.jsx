import React from 'react'
import UpperNavbar from './UpperNavbar'
import HeaderNavbar from './HeaderNavbar'

const Header = () => {
  return (
    <div className='container'>
      <div className=''>
        <div className='bg-[#7E3C07]'>
          <UpperNavbar />
        </div>
        <div>
          <HeaderNavbar />
        </div>
      </div>
    </div>
  )
}

export default Header
