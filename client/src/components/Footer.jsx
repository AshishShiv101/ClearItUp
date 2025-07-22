import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 lg:px-44 py-3">
      {/* Logo and Site Name */}
      <div className="flex items-center gap-2">
        <img width={50} src={assets.logo} alt="Logo" />
        <span className="text-lg font-semibold text-zinc-800">ClearItUp</span>
      </div>

      {/* Copyright */}
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright © ashishshiv | All rights reserved
      </p>

      {/* GitHub and LinkedIn */}
      <div className="flex gap-3">
        <a
          href="https://github.com/AshishShiv101" // 🔗 your GitHub URL here
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width={30}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ashish-s-a5273a22b/" // 🔗 your LinkedIn URL here
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width={30}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
