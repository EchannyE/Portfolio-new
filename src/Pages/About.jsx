import React from 'react';
import { TypeAnimation } from "react-type-animation";
import Button from '../Components/Button'; // Assuming your Button component is in this path
import { Link } from 'react-router-dom';


const About = () => {
    // Centralize personal info for easier management and potential reuse
    const personalInfo = [
        { label: 'Name', value: 'Echanny Idagu' },       
        { label: 'Nationality', value: 'Nigerian' },
        { label: 'Email', value: 'ondaechanny@gmail.com' },
        { label: 'Phone', value: '+234 816 954 0329' }, // Standardize phone number format
        { label: 'State', value: 'Cross River' },
        { label: 'City', value: 'Ogoja' },
    ];

    // Centralize skills data
    const skills = [
        { name: 'HTML', percentage: 95 },
        { name: 'CSS3', percentage: 90 },
        { name: 'Tailwind CSS', percentage: 86 },
        { name: 'JavaScript', percentage: 75 }, // Adjusted for more realistic progression
        { name: 'React.js', percentage: 80 },
        { name: 'Node.js', percentage: 50 },
        { name: 'Express.js', percentage: 55 },
        { name: 'MongoDB', percentage: 50 },
        
    ];

    return (
        <section className=' dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen'>
            <div className='max-w-7xl mx-auto'>
                {/* Section Title */}
                <h2 className='text-4xl font-extrabold text-yellow-400 mb-12 text-center relative after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-yellow-500 after:rounded-full'>
                    About Me
                </h2>

                {/* Main Content Area */}
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Column: Introduction & Personal Info */}
                    <div className="lg:w-1/2 w-full space-y-8">
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
                            I am a passionate <span className='text-yellow-400 font-bold'>Frontend Developer</span> with a strong foundation in building engaging and responsive web applications. My expertise lies in crafting intuitive user interfaces using modern technologies like React.j and Tailwind CSS. I am committed to delivering high-quality solutions that are both visually appealing and highly functional.
                        </p>

                        {/* Personal Information Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 ">
                            {personalInfo.map((item) => (
                                <div key={item.label} className="flex items-center">
                                    <p className="font-semibold mr-2">{item.label}:</p>
                                    <span className="">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-sm sm:max-w-none">
                            <a
                                href="/Echanny_Idagu_CV.pdf" 
                                download="Echanny_Idagu_CV.pdf" 
                                className="w-full sm:w-auto"
                            >
                                <Button title="Download CV" variant="primary" size="md" className="shadow-md hover:shadow-lg" />
                            </a>
                            <Link to="/contact" className="w-full sm:w-auto">
                                <Button title="Hire Me" variant="outline" size="md" className="shadow-md hover:shadow-lg" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Skills Section */}
                    <div className="lg:w-1/2 w-full mt-12 lg:mt-0">
                        <h3 className='text-2xl font-bold text-yellow-400 mb-6'>My Skills</h3>
                        <div className="space-y-6">
                            {skills.map((skill) => (
                                <div key={skill.name} className="skill-item">
                                    <h5 className="flex justify-between items-end mb-2  font-semibold">
                                        <span>{skill.name}</span>
                                        <span className="text-sm text-gray-400">{skill.percentage}%</span>
                                    </h5>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-yellow-500 h-2 rounded-full transition-all duration-700 ease-out"
                                            style={{ width: `${skill.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;