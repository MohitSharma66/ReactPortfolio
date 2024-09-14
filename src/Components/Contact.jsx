import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
          <a href="https://www.instagram.com/mohitsharma_3974/" className="items"><FaInstagram className='icons'/></a>
          <a href="https://www.linkedin.com/in/mohit-sharma-6b10ab27b/" className="items"><CiLinkedin className='icons'/></a>
          <a href="https://github.com/MohitSharma66" className="items"><FaGithubSquare className='icons'/></a>
          <a href="mailto:mohits9168@gmail.com" target="_blank" className="items"><SiGmail className='icons'/></a>
        </div>
      </div>
    </>
  )
}

export default Contact
