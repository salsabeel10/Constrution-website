import React from 'react'
import Products from './components/Products'
import Product_1 from './components/Product_1'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import WhyChooseUs from './components/WhyChooseUs'
import Experience from './components/Experience'
import MaterialsSection from './components/MaterialSection'
import LatestProjects from './components/LatestProjects'


const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <Experience />
      <MaterialsSection />
      <LatestProjects />
      <Products />
      <Product_1 />
    </div>
  )
}

export default App