import React from 'react'
import Banner from './banner/Banner'
import ChooseUs from './chooseUs/ChooseUs'
import Data from './data/Data'
import OurServices from './ourServices/OurServices'
import WorkingProcess from './workingProcess/WorkingProcess'
import OurResorces from './ourResorces/OurResorces'
import OurProject from './ourProject/OurProject'
import Companies from './companies/Companies'
import TestimonialSection from './testimonial/TestimonialSection'

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
      <section>
        <WorkingProcess />
      </section>
      <section>
        <OurResorces />
      </section>
      <section>
        <OurProject />
      </section>
      <section>
        <Companies />
      </section>
      <section>
        <TestimonialSection />
      </section>
    </div>
  )
}

export default HomePage
