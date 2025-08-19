import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('✅ Thank you for your message! This is a demo form.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        { icon: Mail, title: 'Email Me', value: 'ondaechanny@gmail.com', href: 'mailto:ondaechanny@gmail.com' },
        { icon: Phone, title: 'Call Me', value: '+234 816 954 0329', href: 'tel:+2348169540329' },
        { icon: MapPin, title: 'Location', value: 'Ogoja, Cross River, Nigeria', href: 'https://goo.gl/maps/example' },
    ];

    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/share/1C9vDUJ5qP/", label: "Facebook" },
        { icon: Instagram, href: "https://www.instagram.com/echannyonda", label: "Instagram" },
        { icon: Linkedin, href: "http://www.linkedin.com/in/echannyidagu", label: "LinkedIn" },
    ];

    return (
        <section className='bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 min-h-screen text-gray-800 dark:text-gray-200'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-4xl font-extrabold text-yellow-500 dark:text-yellow-400 mb-12 text-center relative
                                after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2
                                after:w-20 after:h-1 after:bg-yellow-500 dark:after:bg-yellow-400 after:rounded-full'>
                    Get in Touch
                </h2>

                <p className="text-center text-lg max-w-2xl mx-auto mb-16 text-gray-600 dark:text-gray-400">
                    I'm currently available for new opportunities and collaborations. Feel free to send me a message, and I'll get back to you as soon as possible.
                </p>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 w-full"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border p-2 dark:bg-gray-800"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border p-2 dark:bg-gray-800"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border p-2 dark:bg-gray-800"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border p-2 dark:bg-gray-800"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-3 rounded-md font-semibold text-white bg-yellow-500 hover:bg-yellow-600 shadow-md"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 w-full space-y-10 mt-12 lg:mt-0"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col items-center text-center"
                                >
                                    <item.icon size={36} className="text-yellow-500 dark:text-yellow-400 mb-4" />
                                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.value}</p>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-center">Follow Me</h3>
                            <div className="flex justify-center space-x-6">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2 }}
                                        className="text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                                    >
                                        <social.icon size={40} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
