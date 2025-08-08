import React from 'react';
import { Github, ExternalLink } from 'lucide-react'; // Icons for GitHub and live demo links


const Projects = () => {
    // Centralized data for all projects. This makes adding/editing projects easy.
    const projectsData = [
        {
            id: 1,
            title: "Ai-Financial Assistant",
            description: "A comprehensive financial management tool that uses AI to help users track expenses, set budgets, and achieve financial goals. It features a user-friendly interface and real-time analytics.",
            imageUrl: "https://placehold.co/400x250/1f2937/d1d5db?text=Project+AI-Financial+Assistant",
            techStack: ["React", "Tailwind CSS", "JWT", "Node.js", "MongoDB", "Express"],
            liveUrl: "https://ai-financial-assistant-frontend.vercel.app/", 
            githubUrl: "https://github.com/EchannyE/july-showcase.git", 
        },
        {
            id: 2,
            title: "EE-Movie Recommendation App",
            description: "An interactive dashboard that visualizes sales data in real-time. It uses charts and graphs to present complex data in an understandable way.",
            imageUrl: "https://placehold.co/400x250/1f2937/d1d5db?text=EE-Movie+Recommendation+App",
            techStack: ["React", "Node.js", "API", "Express", "MongoDB", "Tailwind CSS"],
            liveUrl: "https://frontend-capstone-nine.vercel.app/",
            githubUrl: "https://github.com/EchannyE/Capstone-Project.git",
        },
        {
            id: 3,
            title: "Color Guessing Game",
            description: "A fun and interactive game where users guess colors based on RGB values. It features a clean UI and responsive design, making it accessible on all devices.",
            imageUrl: "https://placehold.co/400x250/1f2937/d1d5db?text=Color+Guessing+Game",
            techStack: ["HTML", "Tailwind", "Js" ],
            liveUrl: "https://color-guessing-game-usz9.vercel.app/",
            githubUrl: "https://github.com/EchannyE/color-guessing-game.git",
        },
    
        {
            id: 5,
            title: "Portfolio Website",
            description: "This very portfolio website you are viewing. Built from the ground up to showcase my skills in a clean and professional manner.",
            imageUrl: "https://placehold.co/400x250/1f2937/d1d5db?text=Portfolio",
            techStack: ["React", "Tailwind CSS"],
            liveUrl: "https://echanny-portfolio.vercel.app/",
            githubUrl: "https://github.com/EchannyE/Portfolio-new.git"
        },
        
    ];

    return (
        <section className='bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 min-h-screen text-gray-800 dark:text-gray-200'>
            <div className='max-w-7xl mx-auto'>
                {/* Section Title */}
                <h2 className='text-4xl font-extrabold text-yellow-500 dark:text-yellow-400 mb-12 text-center relative
                                after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2
                                after:w-20 after:h-1 after:bg-yellow-500 dark:after:bg-yellow-400 after:rounded-full'>
                    My Projects
                </h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden
                                       transition-transform duration-300 hover:scale-105 hover:shadow-2xl
                                       border border-gray-200 dark:border-gray-700"
                        >
                            <img
                                src={project.imageUrl}
                                alt={`Screenshot of ${project.title}`}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{project.description}</p>
                                
                                {/* Tech Stack Badges */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300
                                                                    text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Links */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-white
                                                   bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 shadow-md"
                                        aria-label={`View live demo of ${project.title}`}
                                    >
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-gray-700 dark:text-gray-300
                                                   bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 shadow-md"
                                        aria-label={`View ${project.title} on GitHub`}
                                    >
                                        <Github size={18} />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
