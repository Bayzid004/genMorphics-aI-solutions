import React from 'react'
import Banner from './banner/Banner'
import About from './about/About'
import ChooseUs from './chooseUs/ChooseUs'
import Services from './services/Services'
import DreamYardCallFormSection from '../common/dreamYardCall&FormSection/DreamYardCallFormSection'
import Review from './review/Review'
import Gallery from './gallery/Gallery'
import ServiceArea from './serviceArea/ServiceArea'
import ContactUs from './contactUs/ContactUs'
import Map from '../common/map/Map'
import Data from './data/Data'
import OurServices from './ourServices/OurServices'

const HomePage = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <ChooseUs />
      </section>
      <section>
        <Data />
      </section>
      <section>
        <OurServices />
      </section>
    </div>
  )
}

export default HomePage
