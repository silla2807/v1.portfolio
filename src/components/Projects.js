import React from 'react';
import {
  FaAndroid,
  FaLaptopCode,
  FaCogs,
  FaLink,
} from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      name: 'Product Data Extraction from Images',
      description:
        'Developed a system for extracting text from images using machine learning, incorporating advanced text detection and recognition techniques, including the STR model and CRNN neural network architecture. Led the team, actively participating in dataset collection, documentation, presentation, scheduling, acting as the point of contact, and contributing to the overall development and discussions.',
      tech: 'Machine Learning, Computer Vision, Python',
      type: 'ML System',
      link: 'https://docs.google.com/presentation/d/1UnisrOIN1NwnHzz7_RzQuqELnz98qvfG/',
      icon: <FaCogs className="text-3xl text-yellow-500" />,
    },
    {
      name: 'Lost and Found',
      description:
        'Led the development of a web platform using HTML, CSS, JavaScript, PHP, and MySQL for reporting lost and found items. This application was inspired by a real-world scenario at my college, where the institution was overwhelmed with lost-and-found emails. To address this, we developed the application as part of a Web Programming course project, successfully creating a functional solution through continuous effort and learning.',
      tech: 'HTML, CSS, JavaScript, PHP, MySQL',
      type: 'Web',
      link: 'https://github.com/silla2807/Web-Programming-Project',
      icon: <FaLaptopCode className="text-3xl text-gray-300" />,
    },
    {
      name: 'NITC Events Android Application',
      description:
        'Collaborated on UI/UX design using Figma and contributed to the front-end development of an Android app using Flutter and Dart to provide real-time updates on NITC events. This project sparked my interest in UI/UX design as I explored the creative process of designing user-friendly interfaces. Additionally, I gained proficiency in ER diagrams, use cases, functional and non-functional requirements, and the complete software development lifecycle.',
      tech: 'UI/UX Design, Flutter, Dart',
      type: 'Android',
      link: 'https://www.figma.com/design/QWVwV3tzC9v83Q4uqOnRbS/UI-NITCEvents',
      icon: <FaAndroid className="text-3xl text-green-600" />,
    },
    {
      name: 'Student Trading Hub',
      description:
        'Built a dynamic web application using HTML, CSS, PHP, and MySQL, facilitating peer-to-peer trading within the college community. This was my first project, where I gained expertise in PHP and related technologies. Through research, learning, and patience, I successfully developed the application, deepening my interest in web development and understanding the importance of user requirements and system design.',
      tech: 'Web Development, PHP, MySQL',
      type: 'Web',
      link: 'https://github.com/silla2807/Student-Trading-Hub',
      icon: <FaLaptopCode className="text-3xl text-gray-300" />,
    },
    {
      name: 'Portfolio',
      description:
        'Created a personal portfolio using React to showcase skills and projects. Designed components with Tailwind CSS and deployed it as a standalone application on GitHub Pages.',
      tech: 'React.js, Tailwind CSS, JavaScript, Git',
      type: 'Web',
      link: 'https://github.com/silla2807/Portfolio',
      icon: <FaLaptopCode className="text-3xl text-gray-300" />,
    },
  ];
  
  return (
    <div className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <div className="mr-3">{project.icon}</div>
              <h3 className="text-xl font-semibold text-white">
                {project.name}
              </h3>
            </div>
            <p className="text-gray-300 mb-4">{project.description}  <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-500 hover:text-blue-700"
            >
              <FaLink className="mr-2 text-lg" />
            </a></p>
            <p className="text-sm text-blue-400 font-medium mb-4">
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
