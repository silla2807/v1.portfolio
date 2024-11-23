import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Resume from '../docu/Silla_K__Resume_SDE.pdf';

const Contact = () => {
  // Array of contact links with their respective icons
  const links = [
    { href: 'https://leetcode.com/Silla_K', icon: <SiLeetcode className="text-blue-500 text-3xl hover:scale-125 hover:text-yellow-500 transform transition duration-300 ease-in-out" />, label: 'LeetCode' },
    { href: 'https://github.com/silla2807', icon: <FaGithub className="text-blue-500 text-3xl hover:scale-125 hover:text-gray-200 transform transition duration-300 ease-in-out" />, label: 'GitHub' },
    { href: 'https://linkedin.com/in/silla-k', icon: <FaLinkedin className="text-blue-500 text-3xl hover:scale-125 hover:text-blue-700 transform transition duration-300 ease-in-out" />, label: 'LinkedIn' },
    { href: Resume, icon: <FaFileAlt className="text-blue-500 text-3xl hover:scale-125 hover:text-green-500 transform transition duration-300 ease-in-out" />, label: 'Resume', download: true },
  ];

  return (
    <div className="contact py-20">
      <div className="max-w-5xl mx-auto px-8 transform transition-opacity duration-1000 ease-in-out">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Get in Touch</h2>
        {/* Contact Description */}
        {/* <p className="text-lg font-light text-center text-gray-300 mb-12">
          Whether you have a question or just want to say hi, feel free to drop me a message. I'll try my best to get back to you!
        </p> */}

        {/* Say Hi Button */}
        <div className="flex flex-col items-center space-y-8">
          <button
            onClick={() => (window.location.href = 'mailto:silla.k.careers@gmail.com')}
            className="bg-blue-500 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 hover:shadow-xl hover:scale-105 transform transition duration-300"
          >
            Say Hi!
          </button>

          {/* Contact Links */}
          <div className="flex space-x-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                download={link.download ? 'true' : undefined}
                className="flex items-center"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
