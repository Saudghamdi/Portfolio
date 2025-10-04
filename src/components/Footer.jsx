import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import CV from '../assets/saud (4).pdf';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-[#070a19] text-white py-8">
      <div className="container mx-auto flex flex-col justify-center items-center">
       
        <div className="flex items-center">
          <a href="https://www.linkedin.com/in/saud-al-ghamdi-276565323?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BC1LYqGOIQyeL7ABKd3JVhw%3D%3D" className="mr-4">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/saudhero" className="mr-4">
            <FaGithub size={24} />
          </a>
          <a href="mailto:saudalghamdi454@gmail.com" className="mr-4">
            <HiOutlineMail size={24} />
            
          </a>
          <a href={CV} target='_blank' rel='noopener noreferrer'>
            <BsFillPersonLinesFill size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;