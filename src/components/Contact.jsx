import React from 'react';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import SaudPDF from '../assets/saud.pdf';

const Contact = () => {
  return (
    <div name="contact" className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-3 inline-block relative">
            Contact
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </h2>
          <p className="text-gray-400 text-lg mt-10">
            // You can reach me via email, phone, or connect with me online
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 mb-16">
          <div className="group relative bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-xl p-6 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 border border-slate-800 hover:border-blue-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/20 group-hover:to-pink-600/20 transition-all duration-500"></div>
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-center gap-4">
              <HiOutlineMail className="text-blue-400 w-8 h-8 flex-shrink-0" />
              <span className="text-gray-300 text-lg break-all">saudghamdi.it@gmail.com</span>
            </div>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
          </div>

          <div className="group relative bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-xl p-6 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 border border-slate-800 hover:border-blue-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/20 group-hover:to-pink-600/20 transition-all duration-500"></div>
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-center gap-4">
              <HiOutlinePhone className="text-blue-400 w-8 h-8 flex-shrink-0" />
              <span className="text-gray-300 text-lg font-medium">+966 54 785 0561</span>
            </div>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>

        {/* Social Links & CV */}
        <div className="flex flex-col items-center gap-8 mb-24">
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/saud-alghamdi-276565323/"
              target="_blank"
              rel="noreferrer"
              className="group relative bg-gradient-to-br from-blue-700 to-blue-900 p-4 rounded-full text-white hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/saudghamdi"
              target="_blank"
              rel="noreferrer"
              className="group relative bg-gradient-to-br from-slate-700 to-slate-900 p-4 rounded-full text-white hover:shadow-2xl hover:shadow-slate-500/50 transition-all duration-500 hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
          </div>

          <a
            href={SaudPDF}
            download
            className="group relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Download CV</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
