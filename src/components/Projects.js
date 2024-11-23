import React from 'react';
import { FaGithub, FaFigma, FaFilePowerpoint, FaAndroid, FaLaptopCode, FaCogs } from 'react-icons/fa';

const Projects = () => {
  // Array of project objects with name, description, technology, link, icon, and type
  const projects = [
    {
      name: 'Product Data Extraction from Images',
      description: 'Developed a system for extracting text from images using machine learning, incorporating advanced text detection and recognition techniques, including the STR model and CRNN neural network architecture.',
      tech: 'Machine Learning, Computer Vision, Python',
      type: 'ML System',
      link: 'https://docs.google.com/presentation/d/1UnisrOIN1NwnHzz7_RzQuqELnz98qvfG/',
      icon: <FaCogs className="text-xl text-yellow-500" />, // Automated system icon for ML
    },
    {
      name: 'Lost and Found',
      description: 'Led the development of a comprehensive web platform using HTML, CSS, JavaScript, PHP, MySQL, and XAMPP, facilitating user authentication, item reporting, and search functionalities for reporting lost and found items.',
      tech: 'HTML, CSS, JavaScript, PHP, MySQL',
      type: 'Web',
      link: 'https://github.com/silla2807/Web-Programming-Project',
      icon: <FaLaptopCode className="text-xl text-gray-300" />, // For Web project
    },
    {
      name: 'NITC Events Android Application',
      description: 'Collaborated on UI/UX design using Figma and front-end development in Flutter and Dart for an Android app providing real-time updates on NITC events, ensuring an engaging user experience.',
      tech: 'UI/UX Design, Flutter, Dart',
      type: 'Android',
      link: 'https://www.figma.com/design/QWVwV3tzC9v83Q4uqOnRbS/UI-NITCEvents',
      icon: <FaAndroid className="text-xl text-green-600" />, // For Android project
    },
    {
      name: 'Student Trading Hub',
      description: 'Collaborated on UI/UX design using Figma and front-end development in Flutter and Dart for an Android app providing real-time updates on NITC events, ensuring an engaging user experience. Student Trading Hub | Web Development, PHP, MySQL Collaborated on building a dynamic web application using HTML, CSS, JavaScript, PHP, MySQL, and XAMPP, focusing on creating a user-friendly interface and robust back-end functionalities for peer-to-peer trading of essential items within the college community',
      tech: 'Web Development, Bootstrap, PHP, MySQL',
      type: 'Web',
      link: 'https://github.com/silla2807/Student-Trading-Hub',
      icon: <FaLaptopCode className="text-xl text-gray-300" />, // For Web project
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-4xl font-semibold text-center text-white mb-12">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4 border-l-2 rounded-lg border-blue-500 transition-all duration-1000 ">
        {projects.map((project, index) => {
          let linkIcon;
          // Change link icon and symbol based on project type
          switch (project.type) {
            case 'Web':
              linkIcon = <FaGithub className="text-xl text-gray-300" />;
              break;
            case 'Android':
              linkIcon = <FaFigma className="ml-2 text-xl text-pink-600" />; // Figma icon for Android link
              break;
            case 'ML System':
              linkIcon = <FaFilePowerpoint className="ml-2 text-xl text-blue-500" />;
              break;
            default:
              linkIcon = <FaGithub className="ml-2 text-xl text-blue-600" />;
          }

          return (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center bg-gray-900 mb-4 p-3 rounded-lg">
                <div className="mr-3">{project.icon}</div>
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              </div>
              <p className="text-gray-200 mb-4">{project.description}</p>
              <p className="text-sm text-blue-400 font-bold mb-4">{project.tech}</p> {/* Technologies in bold blue */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                {linkIcon}
                <span className="ml-2 text-gray-300">View More</span> {/* Optional link text */}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
