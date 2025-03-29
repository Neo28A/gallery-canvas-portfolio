import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-6 bg-black z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-gray-400 hover:text-gray-200 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
