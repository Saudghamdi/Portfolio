import React from 'react';


const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'React Native',
  'Python',
  'SQL',
  'Power BI',
  'GitHub'
];

const Skills = () => {
  return (
    <div name="skills" className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-3 inline-block relative">
            Skills
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </h2>
          <p className="text-gray-400 text-lg mt-4">// Technologies I've worked with</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-32">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 border border-slate-800 hover:border-blue-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/20 group-hover:to-pink-600/20 transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="relative text-2xl font-bold text-white text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 z-10">
                {skill}
              </h3>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;