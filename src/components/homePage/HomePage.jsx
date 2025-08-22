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
import FAQSection from './faqSection/FAQSection'
import ContactSection from './contactSection/ContactSection'

const HomePage = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section id='whychooseus'>
        <ChooseUs />
      </section>
      <section>
        <Data />
      </section>
      <section id='ourservices'>
        <OurServices />
      </section>
      <section>
        <WorkingProcess />
      </section>
      <section>
        <OurResorces />
      </section>
      <section id='ourprojects'>
        <OurProject />
      </section>
      <section>
        <Companies />
      </section>
      <section id='testimonial'>
        <TestimonialSection />
      </section>
      <section>
        <FAQSection />
      </section>
      <section id='contact'>
        <ContactSection />
      </section>
    </div>
  )
}

export default HomePage
