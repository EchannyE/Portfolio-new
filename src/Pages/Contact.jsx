import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';



const Contact = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // This is where you would typically handle form submission, e.g.,
        // send data to an API endpoint or use a service like Formspree.
        console.log('Form submitted:', formData);
        alert('Thank you for your message! This is a demo form. The data has been logged to the console.');
        // Clear the form after submission
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    // Centralized data for contact information and social links
    const contactInfo = [
        { icon: Mail, title: 'Email Me', value: 'ondaechanny@gmail.com', href: 'mailto:ondaechanny@gmail.com' },
        { icon: Phone, title: 'Call Me', value: '+234 816 954 0329', href: 'tel:+2348169540329' },
        { icon: MapPin, title: 'Location', value: 'Ogoja, Cross River, Nigeria', href: 'https://goo.gl/maps/example' },
    ];

    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/share/1C9vDUJ5qP/", label: "Facebook" },
        { icon: Instagram, href: "https://www.instagram.com/echannyonda?igsh=MTcwdmE3ZnB2cHN5dA==", label: "Instagram" },
        { icon: Linkedin, href: "http://www.linkedin.com/in/echannyidagu", label: "LinkedIn" },
    ];

    return (
        <section className='bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 min-h-screen text-gray-800 dark:text-gray-200'>
            <div className='max-w-7xl mx-auto'>
                {/* Section Title */}
                <h2 className='text-4xl font-extrabold text-yellow-500 dark:text-yellow-400 mb-12 text-center relative
                                after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2
                                after:w-20 after:h-1 after:bg-yellow-500 dark:after:bg-yellow-400 after:rounded-full'>
                    Get in Touch
                </h2>

                <p className="text-center text-lg max-w-2xl mx-auto mb-16 text-gray-600 dark:text-gray-400">
                    I'm currently available for new opportunities and collaborations. Feel free to send me a message, and I'll get back to you as soon as possible.
                </p>

                {/* Main Content Area */}
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Column: Contact Form */}
                    <div className="lg:w-1/2 w-full">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                               bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                                               shadow-xl focus:border-yellow-500 focus:ring-yellow-500 p-2" 
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                               bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                                               shadow-xl focus:border-yellow-500 focus:ring-yellow-500 p-2"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject "
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                               bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                                               shadow-xl focus:border-yellow-500 focus:ring-yellow-500 p-2"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                               bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                                               shadow-xl focus:border-yellow-500 focus:ring-yellow-500"
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-start">
                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white
                                               bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 shadow-md"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Column: Contact Info & Socials */}
                    <div className="lg:w-1/2 w-full space-y-10 mt-12 lg:mt-0">
                        {/* Contact Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col items-center
                                               text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                                >
                                    <div className="text-yellow-500 dark:text-yellow-400 mb-4">
                                        {<item.icon size={36} strokeWidth={1.5} />}
                                    </div>
                                    <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-gray-100">{item.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.value}</p>
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">Follow Me</h3>
                            <div className="flex justify-center space-x-6">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 dark:text-gray-500 hover:text-yellow-500 dark:hover:text-yellow-400
                                                   transition-colors duration-200"
                                        aria-label={`Visit my ${social.label} profile`}
                                    >
                                        {<social.icon size={40} strokeWidth={1.5} />}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
