'use client'; // This makes the file a Client Component
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

// ----------------for cv downloding button ----------------
const HeroSection = () => {
  const handleCVDownload = () => {
    // Trigger CV download
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Replace with the actual file path in your `public` folder
    link.download = 'Joydip_CV.pdf'; // Suggested file name
    link.click();
  };

  const router = useRouter();
  const handleHire = () => {
    router.push('/contectInfo'); // Replace with the actual path to your contact page
  };

  return (
    <div>
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-seif-start"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold lg:leading-normal">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600">
                Hello, I'm{' '}
              </span>
              <br />
              <TypeAnimation
                sequence={['Joydip', 1000, 'Frontend Web Developer', 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              I'm a Frontend developer with a passion for building beautiful
              websites and web applications.
            </p>
            {/* --------Button section-------- */}
            <div className="flex space-x-4">
              <button
                onClick={handleHire}
                className="px-6 py-3 w-40 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-300 text-white"
              >
                Hire Me
              </button>
              <button
                onClick={handleCVDownload}
                className="px-1 py-1 w-40 sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </div>
          </motion.div>
          {/* -------image section------ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
            >
              <Image
                src="/me.png"
                alt="me image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={370}
                height={370}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
// This is the end of the HeroSection component.
