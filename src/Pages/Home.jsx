import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../Components/Button";
import BackgroundBlobs from "../Components/BackgroundBlobs";

const Home = () => {
  return (
    <main className="relative min-h-[calc(100vh-64px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-white">
      {/* Background blobs */}
      <BackgroundBlobs />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 z-10 relative">
        {/* Left Section: Text Content */}
        <motion.header
          className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-gray-800 dark:text-white drop-shadow-lg">
            Hi, I'm <span className="text-yellow-500">Echanny Idagu</span>
          </h1>

          <div className="min-h-[60px] flex items-center justify-center md:justify-start">
            <span className="text-3xl sm:text-4xl font-semibold mr-2 text-gray-700 dark:text-gray-300">
              I am a
            </span>
            <TypeAnimation
              className="text-3xl sm:text-4xl font-bold text-yellow-500"
              sequence={[
                "Frontend Developer.",
                1500,
                "Problem Solver.",
                1500,
                "Creative Thinker.",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
            I craft engaging web experiences. With a passion for clean code and
            effective strategies, I bring ideas to life on the web. Let's build
            something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-sm sm:max-w-none justify-center md:justify-start">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/projects" className="w-full sm:w-auto">
                <Button
                  title="View My Work"
                  variant="primary"
                  size="lg"
                  className="shadow-md hover:shadow-lg"
                />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  title="Get In Touch"
                  variant="outline"
                  size="lg"
                  className="shadow-md hover:shadow-lg"
                />
              </Link>
            </motion.div>
          </div>
        </motion.header>

        {/* Right Section: Profile Image */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center md:justify-end mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-yellow-500 shadow-2xl transition-transform duration-300 hover:scale-105">
            <img
              src="/img/profile.png"
              alt="Portrait of Echanny Idagu, Frontend Developer"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-20"></div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Home;