import React from 'react';

const SkillGallery = () => {
  // Array of skills with their badge URLs and labels
  const skills = [
    { name: 'Java', badge: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white' },
    { name: 'SQL', badge: 'https://img.shields.io/badge/SQL-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white' },
    { name: 'JavaScript (ES6)', badge: 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E' },
    { name: 'HTML5', badge: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
    { name: 'CSS3', badge: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
    { name: 'Spring Boot', badge: 'https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white' },
    { name: 'Hibernate/JPA', badge: 'https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white' },
    { name: 'React.js', badge: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
    { name: 'JUnit', badge: 'https://img.shields.io/badge/JUnit-25A162?style=for-the-badge&logo=junit5&logoColor=white' },
    { name: 'MySQL', badge: 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white' },
    { name: 'MongoDB (NoSQL)', badge: 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white' },
    { name: 'Git', badge: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white' },
  ];




  return (
    <div className="skill-gallery py-16 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-white-800 mb-8">Skill Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6" >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-blue-500 hover:bg-gray-900"
            >
              <img
                src={skill.badge}
                alt={skill.name}
                className="w-auto h-12 object-contain mb-4 transition-all duration-300"
              />
              <h3 className="text-sm font-semibold text-white-800 hover:text-gray-300 transition-colors duration-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillGallery;
