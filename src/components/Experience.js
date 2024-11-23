import React, { useState } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'; 
import { motion } from 'framer-motion'; 

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0); // Set default selected index to 0 (Magicbricks)

  const experiences = [
    {
      year: 'Jul 2023 - Apr 2024',
      org: 'Magicbricks',
      type: 'Work',
      location: 'Bangalore, Karnataka',
      role: 'Full Stack Developer',
      work: `At Magicbricks, I worked as a Full Stack Developer on the Home Interiors team and also collaborated with other teams as a flexible contributor to the organization. I closely worked with senior developers, QA teams, and product managers to maintain code integrity and develop and design products that positively impacted the organization’s business metrics. I gained hands-on experience with Java, Spring Boot, GitLab, React.js, IntelliJ IDEA, Postman, JIRA, and other tools and technologies.

During my time on the Home Interiors team, I worked on two major projects focused on lead generation and building a CRM, which assisted the sales team in tracking generated leads. I contributed to both the front-end and back-end of these applications, enhancing existing functionalities and developing new features from scratch for certain CTAs. Overall, these efforts led to a notable increase in business metrics, and my experience at Magicbricks significantly contributed to my understanding of corporate professional growth and the interpersonal and professional skills necessary for organizational success. Additionally, I gained expertise in full stack web development and a comprehensive understanding of the relevant tools and technologies.`,
      skills: [
        'Java',
        'Spring Boot',
        'Hibernate/JPA',
        'Postman',
        'JUnit',
        'MySQL',
        'SQL',
        'React.js',
        'Git',
        'GitLab',
        'JIRA',
        'HTML',
        'CSS',
        'JavaScript (ES6)',
        'IntelliJ IDEA',
      ], // Directly reference the imported logo
      link: 'https://www.magicbricks.com',
    },
    {
      year: 'Jul 2019 - May 2023',
      org: 'NIT Calicut',
      type: 'Edu',
      location: 'Calicut, Kerala',
      role: 'Student',
      work: 'Graduated with a degree in Computer Science and Engineering.',
      coursework: [
        'Data Structures',
        'Algorithms',
        'Object-Oriented Programming',
        'Operating Systems',
        'Databases',
        'Web Programming',
        'Software Engineering',
        'Principles of Management',
      ],
      link: 'https://www.nitc.ac.in',
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold text-left text-white mb-12">
        Experience & Education
      </h2>
      <div className="flex flex-col lg:flex-row gap-12 justify-between">
        {/* Timeline List */}
        <motion.div
          className="flex flex-col gap-6 lg:w-1/3"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`p-6 cursor-pointer rounded-lg 
                ${selectedIndex === index ? 'bg-gray-900 text-gray-300  border-l-2 border-blue-500' : 'text-white'} 
                 transform hover:scale-105`}
              onClick={() => setSelectedIndex(index)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3 mb-2">
                {exp.type === 'Work' ? (
                  <FaBriefcase
                    className={`text-xl ${
                      selectedIndex === index ? 'text-white' : 'text-blue-500'
                    }`}
                  />
                ) : (
                  <FaGraduationCap
                    className={`text-xl ${
                      selectedIndex === index ? 'text-white' : 'text-blue-500'
                    }`}
                  />
                )}
                <div
                  className={`font-semibold text-xl ${
                    selectedIndex === index ? 'text-white' : 'text-gray-300'
                  }`}
                >
                  {exp.org}
                </div>
              </div>
              <div
                className={`text-sm ${
                  selectedIndex === index ? 'text-gray-200' : 'text-gray-400'
                }`}
              >
                {exp.year}
              </div>
              <div
                className={`text-sm ${
                  selectedIndex === index ? 'text-gray-100' : 'text-gray-400'
                } mt-2`}
              >
                {exp.role}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Content */}
        {selectedIndex !== null && (
          <div className="lg:w-2/3 p-6 rounded-lg shadow-lg border-l-2 border-blue-500">
            <motion.div
              className="px-4"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold text-white">
                {experiences[selectedIndex].org}
              </h3>
              <a
                href={experiences[selectedIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400"
              >
                Visit {experiences[selectedIndex].org}
              </a>
              <p className="text-sm text-gray-400 font-italic ">
                {experiences[selectedIndex].location}
              </p>
              <h4 className="text-xl font-semibold text-blue-300 mt-4">
                {experiences[selectedIndex].role}
              </h4>
              <p className="text-2sm text-gray-300 mt-2">{experiences[selectedIndex].work}</p>
              {experiences[selectedIndex].coursework && (
                <>
                  <p className="font-semibold mt-4 text-gray-400">Coursework:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {experiences[selectedIndex].coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="bg-transparent border border-blue-500 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </>
              )}
              {experiences[selectedIndex].skills && (
                <>
                  <p className="font-semibold mt-4 text-gray-400">Skills:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {experiences[selectedIndex].skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-transparent border border-blue-500 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
