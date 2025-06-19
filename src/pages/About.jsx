import React from 'react'
import { motion } from 'framer-motion'
import About_Image from '../assets/about.png'

function About() {
  return (
    <div className="bg-white text-black pt-20 lg:pt-24" id='About'>
      <motion.h1 
        initial = {{ opacity:0 }}
        whileInView = {{ opacity:1 }}
        transition = {{ duration:0.5, delay:0}}
      className="text-center"><span className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">About Us</span></motion.h1>
      <div className='w-screen lg:flex lg:items-center justify-center lg:px-10 lg:mt-5'>
        <div className="hidden lg:flex w-1/2 h-[90vh] items-center justify-center pb-10">
            <img src={About_Image} className="object-cover object-top" />
        </div>
        <div className="lg:w-1/2">
            <motion.p 
                initial = {{ x:100, opacity:0 }}
                whileInView = {{ x:0, opacity:1 }}
                transition = {{ duration:0.8, delay:0}}
            className="text-sm sm:text-lg px-6 py-3 sm:pl-16 lg:pl-10 text-justify">Eximace Logistics is a 8 year old International logistics service provider and a leading Customs house agent (CHA). Our services are offered from various locations PAN India and cross countries for Air, Ocean forwarding and CHA activities which includes, normal, SEZ and STPI clearances and trade compliance activities.</motion.p>
            <motion.p 
                initial = {{ x:100, opacity:0 }}
                whileInView = {{ x:0, opacity:1 }}
                transition = {{ duration:0.8, delay:0}}
            className="text-sm sm:text-lg px-6 py-3 sm:pl-16 lg:pl-10 text-justify">With a well- integrated network offices & service centers globally Eximace Logistics have been specializing in supplying the most satisfied ocean freight, Air freight, Customs Brokerage land transportation and all of other logistics services throughout the world with our fully qualified Team through efficient operations and global Presence</motion.p>
            <motion.p 
                initial = {{ x:100, opacity:0 }}
                whileInView = {{ x:0, opacity:1 }}
                transition = {{ duration:0.8, delay:0}}
            className="text-sm sm:text-lg px-6 py-3 sm:pl-16 lg:pl-10 text-justify">Our personalized care and attention help in maintaining a long-lasting relationship with our clients and sets customer satisfaction as their top priority.</motion.p>
        </div>
      </div>
    </div>
  )
}

export default About