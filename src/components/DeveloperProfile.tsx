import React from 'react';
import { FaGithub, FaMapMarkerAlt, FaEnvelope, FaCode, FaHeart } from 'react-icons/fa';

const DeveloperProfile: React.FC = () => {
  const techStack = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Django', 'MySQL'];

  return (
    <div className="mt-16 bg-white rounded-3xl card-shadow border border-outline-variant/10 overflow-hidden">
      {/* Gradient top bar */}
      <div className="h-1 bg-gradient-to-r from-secondary via-primary-container to-secondary" />

      <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
        {/* Avatar */}
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary-container to-secondary flex items-center justify-center text-white text-4xl font-headline font-bold shadow-card">
            VT
          </div>
        </div>

        {/* Info */}
        <div>
          <h3 className="font-headline text-headline-sm text-primary mb-1">Vikas Tiwari</h3>
          <p className="text-on-surface-variant font-body text-body-lg mb-4">Full Stack Developer</p>

          <a
            href="https://github.com/Cyberexe1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-body text-label-md hover:bg-primary-container transition-all duration-300 mb-6"
          >
            <FaGithub /> GitHub Profile
          </a>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-on-surface-variant font-body text-body-md">
              <FaMapMarkerAlt className="text-secondary flex-shrink-0" />
              <span>Mumbai, India</span>
            </div>
            <div className="flex items-center gap-3 text-on-surface-variant font-body text-body-md">
              <FaEnvelope className="text-secondary flex-shrink-0" />
              <a href="mailto:vikastiwari1045@gmail.com" className="text-secondary hover:underline">
                vikastiwari1045@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <FaCode className="text-secondary flex-shrink-0 mt-1" />
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary-container/20 text-primary-container px-3 py-1 rounded-full text-label-sm font-body font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 text-on-surface-variant font-body text-body-md">
              <FaHeart className="text-secondary flex-shrink-0" />
              <span>Loves building responsive web apps and experimenting with AI integration</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
