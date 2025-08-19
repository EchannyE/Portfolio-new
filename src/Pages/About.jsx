import React from 'react';
import { TypeAnimation } from "react-type-animation";
import Button from '../Components/Button'; // Assuming your Button component is in this path
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const About = () => {
    // Centralize personal info for easier management and potential reuse
    const personalInfo = [
        { label: 'Name', value: 'Echanny Idagu' },       
        { label: 'Nationality', value: 'Nigerian' },
        { label: 'Email', value: 'ondaechanny@gmail.com' },
        { label: 'Phone', value: '+234 816 954 0329' }, 
        { label: 'State', value: 'Cross River' },
        { label: 'City', value: 'Ogoja' },
    ];

    // Centralize skills data
    const skills = [
        { name: 'HTML', percentage: 95 },
        { name: 'CSS3', percentage: 90 },
        { name: 'Tailwind CSS', percentage: 86 },
        { name: 'JavaScript', percentage: 75 },
        { name: 'React.js', percentage: 80 },
        { name: 'Node.js', percentage: 50 },
        { name: 'Express.js', percentage: 55 },
        { name: 'MongoDB', percentage: 50 },
    ];

    return (
        <section className='dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen'>
            <div className='max-w-7xl mx-auto'>
                {/* Section Title */}
                <motion.h2
                    className='text-4xl font-extrabold text-yellow-400 mb-12 text-center relative after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-yellow-500 after:rounded-full'
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                {/* Main Content Area */}
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Column: Introduction & Personal Info */}
                    <motion.div 
                        className="lg:w-1/2 w-full space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                    >
                        <h3 className='text-3xl font-bold text-gray-100'>
                            <span className='mr-2'>Hello, I'm</span>
                            <TypeAnimation
                                className='text-3xl font-bold text-yellow-400'
                                sequence={[
                                    'Echanny Idagu',
                                    1500,
                                    'a Frontend Developer',
                                    1500,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </h3>

                        <p className="text-lg leading-relaxed ">
                            I am a passionate <span className='text-yellow-400 font-bold'>Frontend Developer</span> with a strong foundation in building engaging and responsive web applications. My expertise lies in crafting intuitive user interfaces using modern technologies like React.js and Tailwind CSS. I am committed to delivering high-quality solutions that are both visually appealing and highly functional.
                        </p>

                        {/* Personal Information Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 ">
                            {personalInfo.map((item, index) => (
                                <motion.div 
                                    key={item.label} 
                                    className="flex items-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <p className="font-semibold mr-2">{item.label}:</p>
                                    <span>{item.value}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-sm sm:max-w-none">
                            <motion.a
                                href="/Echanny_Idagu_CV.pdf" 
                                download="Echanny_Idagu_CV.pdf" 
                                className="w-full sm:w-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button title="Download CV" variant="primary" size="md" className="shadow-md hover:shadow-lg" />
                            </motion.a>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto"
                            >
                                <Link to="/contact">
                                    <Button title="Hire Me" variant="outline" size="md" className="shadow-md hover:shadow-lg" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column: Skills Section */}
                    <motion.div 
                        className="lg:w-1/2 w-full mt-12 lg:mt-0"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                    >
                        <h3 className='text-2xl font-bold text-yellow-400 mb-6'>My Skills</h3>
                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <motion.div 
                                    key={skill.name} 
                                    className="skill-item"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    viewport={{ once: true }}
                                >
                                    <h5 className="flex justify-between items-end mb-2 font-semibold">
                                        <span>{skill.name}</span>
                                        <span className="text-sm text-gray-400">{skill.percentage}%</span>
                                    </h5>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <motion.div
                                            className="bg-yellow-500 h-2 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.percentage}%` }}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                        ></motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
