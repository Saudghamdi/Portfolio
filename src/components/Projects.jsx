import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  { 
    title: 'Wallety', 
    description: 'Graduation Project: A full-stack mobile app for personal finance management', 
    tech: ['React naitve', 'Node.js', 'Express', 'NeonDB'], 
    github: 'https://github.com/Saudghamdi/wallet2.git' 
  },


   {
     title: ' To-Do List ', 
    description: 'A simple and intuitive to-do list application', 
    tech: ['Typescript','convex'], 
    github: 'https://github.com/Saudghamdi/Todo.git' 
  },

];

const Projects = () => {
  return (
    <div name="projects" className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-3 inline-block relative">
            Projects
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </h2>
          <p className="text-gray-400 text-lg mt-10">
            // Check out some of my recent work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 border border-slate-800 hover:border-blue-500 overflow-hidden flex flex-col"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/20 group-hover:to-pink-600/20 transition-all duration-500"></div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Project Title */}
              <h3 className="relative text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 z-10">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="relative text-gray-400 mb-6 z-10">{project.description}</p>

              {/* Tech Stack */}
              <div className="relative flex flex-wrap gap-2 mb-6 z-10">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-lg text-sm border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-auto z-10"
              >
                <FaGithub className="w-5 h-5"/>
                View on GitHub
              </a>
              
              {/* Bottom line indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;