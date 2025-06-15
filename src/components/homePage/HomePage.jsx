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

const HomePage = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <About />
      </section>
      <section>
        <ChooseUs />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <DreamYardCallFormSection />
      </section>
      <section>
        <Review />
      </section>
      <section>
        <Gallery />
      </section>
      <section>
        <ServiceArea />
      </section>
      <section>
        <ContactUs />
      </section>
      <section>
        <Map />
      </section>
    </div>
  )
}

export default HomePage
