import React from 'react';

// Import icons from a library like Lucide React (recommended for simplicity and size control)
// npm install lucide-react
import { Code, Database, Users, GraduationCap, Monitor, Link} from 'lucide-react';

const Services = () => {
    // Centralize your service data for easy management
    const servicesData = [
        {
            icon: Code, // Lucide React component
            title: "Web Development",
            description: "I craft responsive, high-performance web applications tailored to your needs, ensuring a seamless user experience across all devices.",
        },
        {
            icon: Monitor, 
            title: "Responsive Design",
            description: "I specialize in creating visually appealing and user-friendly interfaces that adapt flawlessly to any screen size, enhancing user engagement.",
        },
        {
            icon: Database,
            title: "Database Design & Management",
            description: "I design and manage robust database solutions, ensuring data integrity, efficient storage, and secure retrieval for your applications.",
        },
        {
            icon: Users,
            title: "Consultation & Code Review",
            description: "Leverage my expertise for architectural guidance, performance optimization, and rigorous code reviews to elevate your project's quality.",
        },
        {
            icon: GraduationCap,
            title: "Code Instruction & Mentorship",
            description: "I love empowering others. I provide clear, practical coding instruction and mentorship to help aspiring developers master modern web technologies.",
        },
        
        {
            icon: Link, 
            title: "API Integration",
            description: "Seamlessly connect your applications with third-party services and build custom APIs to extend functionality and efficiency.",
        },
    ];

    return (
        <section className='bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 min-h-screen text-gray-800 dark:text-gray-200'>
            <div className='max-w-7xl mx-auto'>
                {/* Section Title */}
                <h2 className='text-4xl font-extrabold text-yellow-500 dark:text-yellow-400 mb-12 text-center relative
                                after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2
                                after:w-20 after:h-1 after:bg-yellow-500 dark:after:bg-yellow-400 after:rounded-full'>
                    What I Do
                </h2>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div
                            key={index} // Using index as key is okay here if items don't change order or get deleted
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 flex flex-col items-center text-center
                                       transition-transform duration-300 hover:scale-105 hover:shadow-2xl
                                       border border-gray-200 dark:border-gray-700"
                        >
                            <div className="text-yellow-500 dark:text-yellow-400 mb-4">
                                {/* Render Lucide icon component dynamically */}
                                {<service.icon size={48} strokeWidth={1.5} />}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;