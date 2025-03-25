import React from 'react'
import { motion } from 'framer-motion'

function Services() {
  return (
    <div className="min-h-screen bg-white text-black pt-20 lg:pt-24" id='Services'>
      <motion.h1 
        initial = {{ opacity:0 }}
        whileInView = {{ opacity:1 }}
        transition = {{ duration:1, delay:0}}
      className="text-4xl sm:text-5xl lg:text-6xl text-center"><span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Our Servies</span></motion.h1>

      <div className="flex pl-6 sm:px-32 gap-3 sm:gap-6 py-3 sm:py-2">
        <motion.h3 
          initial = {{ x:-100, opacity:0 }}
          whileInView = {{ x:0, opacity:1 }}
          transition = {{ duration:0.6, delay:0.2}}
        className="w-2/6 lg:w-1/3 text-right flex items-center justify-end text-2xl sm:text-4xl lg:text-5xl leading-7 lg:leading-11"><span className=" bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent py-6">Air Freight Services</span></motion.h3>
        <motion.p 
          initial = {{ x:100, opacity:0 }}
          whileInView = {{ x:0, opacity:1 }}
          transition = {{ duration:0.6, delay:0.2}}
        className="w-3/5 sm:w-3/5 flex items-center justify-center text-xs sm:text-lg lg:text-xl text-justify pr-6 sm:pr-0">Our team of dedicated experts guarantees consistent efficiency in managing your airfreight cargo, offering the best solutions to meet your specific shipment needs. Our extensive range of services is tailored to meet and exceed your expectations.</motion.p>
      </div>

      <div className="flex pl-6 sm:px-32 gap-3 sm:gap-6 py-3 sm:py-2">
        <motion.h3 
          initial = {{ x:-100, opacity:0 }}
          whileInView = {{ x:0, opacity:1 }}
          transition = {{ duration:0.6, delay:0.2}} 
        className="w-2/6 lg:w-1/3 text-right flex items-center justify-end text-2xl sm:text-4xl lg:text-5xl leading-7 lg:leading-11"><span className=" bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent py-6">Sea Freight Services</span></motion.h3>
        <motion.p 
          initial = {{ x:100, opacity:0 }}
          whileInView = {{ x:0, opacity:1 }}
          transition = {{ duration:0.6, delay:0.2}}
        className="w-3/5 sm:w-3/5 flex items-center justify-center text-xs sm:text-lg lg:text-xl text-justify pr-6 sm:pr-0">Our team is equipped with the knowledge and experience to ensure your freight moves efficiently. We offer Full Container Load (FCL) and Less-Than-Container Load (LCL) options to suit your supply chain needs, regardless of cargo size. With a network of carriers and key trade routes, we're ready to provide comprehensive support for your business.</motion.p>
      </div>

      <div className="flex pl-6 sm:px-32 gap-3 sm:gap-6 py-3 sm:py-2">
        <motion.h3 
          initial = {{ x:-100, opacity:0 }}
          whileInView = {{ x:0, opacity:1 }}
          transition = {{ duration:0.6, delay:0.2}}
        className="w-2/6 lg:w-1/3 text-right flex items-center justify-end text-2xl sm:text-4xl lg:text-5xl leading-7 lg:leading-11"><span className=" bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent py-6">Customs Brokerage</span></motion.h3>
        <motion.p 
          initial = {{ x:100, opacity:0 }}
          whileInView = {{ x:0, opacity:1 }}
          transition = {{ duration:0.6, delay:0.2}}
        className="w-3/5 sm:w-3/5 flex items-center justify-center text-xs sm:text-lg lg:text-xl text-justify pr-6 sm:pr-0">The global market is full of opportunities, and as experts in Customs Brokerage and Clearance, We take care of the complexities while staying ahead of regulatory changes in global trade. We provide a variety of import and export customs services, customized to meet your specific needs.</motion.p>
      </div>

      <div className="flex pl-6 sm:px-32 gap-3 sm:gap-6 py-3 sm:py-2">
        <motion.h3 
          initial = {{ x:-100, opacity:0 }}
          whileInView = {{ x:0, opacity:1 }}
          transition = {{ duration:0.6, delay:0.2}}
        className="w-2/6 lg:w-1/3 text-right flex items-center justify-end text-2xl sm:text-4xl lg:text-5xl leading-7 lg:leading-11"><span className=" bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent py-6">Rail Road Movements</span></motion.h3>
        <motion.p 
          initial = {{ x:100, opacity:0 }}
          whileInView = {{ x:0, opacity:1 }}
          transition = {{ duration:0.6, delay:0.2}}
        className="w-3/5 sm:w-3/5 flex items-center justify-center text-xs sm:text-lg lg:text-xl text-justify pr-6 sm:pr-0">We provide domestic cargo services via Road and Rail at competitive prices. With extensive experience in industry-specific logistics solutions, we specialize in both train and road transportation.</motion.p>
      </div>

      <div className="w-screen flex items-center justify-center flex-wrap px-6 sm:px-16 gap-3 sm:gap-6 py-3 sm:py-2">
        <motion.h3 
          initial = {{ x:-100, opacity:0 }}
          whileInView = {{ x:0, opacity:1 }}
          transition = {{ duration:0.6, delay:0.2}}
        className="w-full text-center text-3xl sm:text-4xl lg:text-5xl"><span className=" bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent py-6">Why us?</span></motion.h3>
        <motion.div 
          initial = {{ x:100, opacity:0 }}
          whileInView = {{ x:0, opacity:1 }}
          transition = {{ duration:0.6, delay:0.2}}
        className="flex items-center justify-center text-sm sm:text-lg lg:text-xl text-justify">
            <div className=''>
                <p className='flex'><span className='w-1/12'>•</span><span className='w-11/12'>Ease of doing business</span></p>
                <p className='flex'><span className='w-1/12'>•</span><span className='w-11/12'>Well established agency network worldwide for smooth handling of pick up and deliveries internationally</span></p>
                <p className='flex'><span className='w-1/12'>•</span><span className='w-11/12'>Customs clearances will be smoother and faster</span></p>
                <p className='flex'><span className='w-1/12'>•</span><span className='w-11/12'>We always share the latest circulars with clarifications and guidance to all our customers</span></p>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
