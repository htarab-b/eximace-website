import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'


import Carousel1 from '../assets/carousel_1.jpg';
import Carousel2 from '../assets/carousel_2.jpg';
import Carousel3 from '../assets/carousel_3.jpg';
import Carousel4 from '../assets/carousel_4.jpg';
import Carousel5 from '../assets/carousel_5.jpg';


const carouselImages = [Carousel1, Carousel2, Carousel3, Carousel4, Carousel5];

function Home() {
  // Simple auto-carousel logic
  const [current, setCurrent] = React.useState(0);
  const [prev, setPrev] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((prevIdx) => (prevIdx + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [current]);

  return (
    <div className="bg-white text-black pt-16 lg:pt-14 flex flex-col items-center justify-center" id="Home">
      {/* Carousel always on top, text always below */}
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
      className="w-full flex justify-center items-center">
          <div className="w-full h-[65vh] lg:h-[60vh] flex items-center justify-center lg:mt-8 relative overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.img
              key={current}
              src={carouselImages[current]}
              alt={`carousel-${current+1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute w-full h-full object-cover z-10"
              style={{ pointerEvents: 'auto' }}
            />
          </AnimatePresence>
        </div>
      </motion.div>
      <div className="w-full max-w-3xl flex flex-col items-center justify-center mt-6 lg:mt-10">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl mb-4 lg:text-7xl text-center logo-font"
        >
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent leading-8">Eximace Logistics Pvt Ltd</span>
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg lg:text-2xl text-center mx-10 lg:mx-0 leading-6"
        >
          Your one stop solution for all your International Logistics needs.
        </motion.p>
      </div>
    </div>
  );
}

export default Home