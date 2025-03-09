import React from 'react'
import { motion } from 'framer-motion'

import Home_Image from '../assets/Home.jpeg'

function Home() {
  return (
    <div className="bg-white text-black pt-20 lg:pt-14 lg:flex lg:items-center justify-center" id='Home'>
      <div className="lg:w-1/3 pb-10">

        <motion.h1 
          initial = {{ x:-100, opacity:0 }}
          animate = {{ x:0, opacity:1 }}
          transition = {{ duration:0.5, delay:0.3 }}
          
        className="text-5xl h-28 lg:h-40 lg:text-7xl text-center lg:text-right logo-font"><span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent leading-8">Eximace Logistics</span></motion.h1>
        
        <motion.p 
          initial = {{ x:-100, opacity:0 }}
          animate = {{ x:0, opacity:1 }}
          transition = {{ duration:0.5, delay:0.6 }}

        className="text-lg lg:text-2xl lg:mt-4 text-center lg:text-right mx-10 lg:mx-0 leading-6">
          Your one stop solution for all your International Logistics needs.
        </motion.p>
      </div>

      <motion.div 
        initial = {{ x:100, opacity:0 }}
        animate = {{ x:0, opacity:1 }}
        transition = {{ duration:0.5, delay:0.2 }}

      className="lg:w-1/2 lg:h-[90vh] flex lg:items-center justify-center lg:pb-10">
          <div className="flex justify-center items-center lg:ml-10">
              <img src={Home_Image} className="object-cover z-20 w-96 h-96" />
          </div>
      </motion.div>
    </div>
  )
}

export default Home