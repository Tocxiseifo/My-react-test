/* eslint-disable no-unused-vars */
import SectionOne from './components/FirstSection'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import SecondSection from './components/sacondSection'
import './index.css'

import { motion , LazyMotion , domAnimation } from 'motion/react'

function App() {

  return (
    <LazyMotion features={domAnimation}>
      <motion.div 
      variants={{
        hidden:{opacity:0} ,
        show:{
            opacity:1,
            transition:{
              staggerChildren:0.25
            },
        },
      }} 
      initial='hidden'
      animate='show'
      className='flex flex-col w-full  font-custom-font   '>
        <NavBar/>
        <SectionOne/>
        <SecondSection />
        <Footer />
      </motion.div>
    </LazyMotion>
  )
}

export default App
