import React from 'react'

import Breadcrum from "./Partials/Breadcrum"
import AboutContent from "./Partials/AboutContent"
import Features from "./Partials/Features"
import Faqs from "./Partials/Faqs"
import BrandSlider from "./Partials/BrandSlider"
import Testimonials from "./Partials/Testimonials"
export default function About() {
  return (
    <>
      <Breadcrum title="About Us" />
      <AboutContent/>
      <BrandSlider/>
      <Features/>
      <Testimonials/>
      <Faqs/>
    </>
  )
}
