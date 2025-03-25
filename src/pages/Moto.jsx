import React from 'react'
import { motion } from 'framer-motion'

function Moto() {
  return (
    <div className="min-h-screen bg-white text-black pt-14 lg:pt-24" id='Moto'>
      <div className="w-screen flex flex-wrap px-6 sm:px-32 gap-3 sm:gap-6 py-3 sm:py-2">
        <motion.h1 
                initial = {{ opacity:0 }}
                whileInView = {{ opacity:1 }}
                transition = {{ duration:0.5, delay:0}}
              className="w-screen text-4xl sm:text-5xl lg:text-6xl text-center"><span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Our Moto</span></motion.h1>
        <div className="flex flex-wrap items-center justify-center text-sm sm:text-lg lg:text-xl text-justify">
          <motion.div 
              initial={{ x:-100, opacity:0 }}
              whileInView={{ x:0, opacity:1 }}
              transition={{ duration:0.6, delay:0.2 }}
              className="block max-w-sm p-6 mx-4 my-2 border rounded-lg shadow-sm bg-gray-800 border-gray-700 hover:bg-gray-700">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white overflow-y-hidden text-left">Providing High-Quality Services</h5>
              <p className="font-normal text-gray-400 text-sm">We are committed to delivering top-notch services tailored to meet client needs with precision and excellence. Our solutions are designed to enhance efficiency and ensure long-term success.</p>
          </motion.div>

          <motion.div 
              initial={{ x:100, opacity:0 }}
              whileInView={{ x:0, opacity:1 }}
              transition={{ duration:0.6, delay:0.2 }}
              className="block max-w-sm p-6 mx-4 my-2 border rounded-lg shadow-sm bg-gray-800 border-gray-700 hover:bg-gray-700">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white overflow-y-hidden text-left">Highest Level of Reliability</h5>
              <p className="font-normal text-gray-400 text-sm">Trust is at the core of our operations. We prioritize reliability, ensuring that our services remain consistent, dependable, and aligned with industry best practices.</p>
          </motion.div>

          <motion.div 
              initial={{ x:-100, opacity:0 }}
              whileInView={{ x:0, opacity:1 }}
              transition={{ duration:0.6, delay:0.2 }}
              className="block max-w-sm p-6 mx-4 my-2 border rounded-lg shadow-sm bg-gray-800 border-gray-700 hover:bg-gray-700">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white overflow-y-hidden text-left">Meeting the Highest Industry Standards</h5>
              <p className="font-normal text-gray-400 text-sm">Our solutions adhere to the most rigorous industry benchmarks, ensuring compliance, efficiency, and superior performance in every project we undertake.</p>
          </motion.div>

          <motion.div 
              initial={{ x:100, opacity:0 }}
              whileInView={{ x:0, opacity:1 }}
              transition={{ duration:0.6, delay:0.2 }}
              className="block max-w-sm p-6 mx-4 my-2 border rounded-lg shadow-sm bg-gray-800 border-gray-700 hover:bg-gray-700">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white overflow-y-hidden text-left">Environmental Responsibility</h5>
              <p className="font-normal text-gray-400 text-sm">We integrate eco-friendly practices into our workflows, reducing our carbon footprint and promoting sustainable solutions for a greener future.</p>
          </motion.div>

          <motion.div 
              initial={{ x:-100, opacity:0 }}
              whileInView={{ x:0, opacity:1 }}
              transition={{ duration:0.6, delay:0.2 }}
              className="block max-w-sm p-6 mx-4 my-2 border rounded-lg shadow-sm bg-gray-800 border-gray-700 hover:bg-gray-700">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white overflow-y-hidden text-left">Prioritizing Workplace Safety</h5>
              <p className="font-normal text-gray-400 text-sm">Ensuring a safe work environment is our priority. We implement stringent safety protocols and provide training to uphold the highest standards in workplace security.</p>
          </motion.div>

          <motion.div 
              initial={{ x:100, opacity:0 }}
              whileInView={{ x:0, opacity:1 }}
              transition={{ duration:0.6, delay:0.2 }}
              className="block max-w-sm p-6 mx-4 my-2 border rounded-lg shadow-sm bg-gray-800 border-gray-700 hover:bg-gray-700">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white overflow-y-hidden text-left">Effective Real-Time Communication</h5>
              <p className="font-normal text-gray-400 text-sm">Seamless communication is key to our operations. We utilize real-time collaboration tools to ensure swift decision-making and enhanced project coordination.</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Moto
