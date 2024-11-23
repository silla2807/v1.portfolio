import React from "react";

const About = () => {
 

  return (
    <div className="py-16" id="about">
      <div className="max-w-screen-lg mx-auto px-6">
        <h2
          className="text-4xl text-white font-semibold text-left mb-8 transition-all duration-1000 ease-in">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          {/* Text Section */}
          <div
            className="lg:w-2/3 mb-8 lg:mb-0 p-6 border-l-2 border-blue-600 rounded-lg shadow-md transition-all duration-1000 ease-in"
          >
            <p className="text-2sm text-gray-300 leading-relaxed">
              Hello! Back in college, I realized I was very interested in 
              <span className="font-bold text-blue-400"> frontend development</span>, but soon enough, I understood my inclination towards both 
              <span className="font-bold text-blue-400"> backend and frontend</span> was equal, haha. So here I am, with 
              <span className="font-bold text-blue-400"> 10 months of experience</span> as a full-stack developer.
              <br />
              <br />
              My interest in web development started back in college when I worked on a project for my 
              <span className="font-bold text-blue-400"> DBMS course</span>. It was a group project, but, well, 
              <span className="font-bold text-blue-400"> I took charge</span> and built the website myself! I actually started with 
              <span className="font-bold text-blue-400"> HTML and CSS</span> during school. Even though that project wasn’t hosted anywhere, I consider it a 
              <span className="font-bold text-blue-400"> significant milestone</span>—or more like a stepping stone—in my journey into web development.
              <br />
              <br />
              Fast forward to my professional life, I joined 
              <span className="font-bold text-blue-400"> Magicbricks</span> as a 
              <span className="font-bold text-blue-400"> Software Engineer (Full-Stack Developer)</span>. I took some courses, learned on the go, and the experience there gave me a 
              <span className="font-bold text-blue-400"> solid foundation</span> in backend technologies like 
              <span className="font-bold text-blue-400"> Java and Spring Boot</span>, as well as frontend using 
              <span className="font-bold text-blue-400"> React</span>. It was great to learn about 
              <span className="font-bold text-blue-400"> Git</span>, write tons of commit messages (some better than others), and contribute to various projects.
              <br />
              <br />
              Now, I am focusing on refining my skills in 
              <span className="font-bold text-blue-400"> DSA, OOPs, Java, Spring Boot, System Design, React.js, HTML, CSS,</span> and 
              <span className="font-bold text-blue-400"> ES6 JavaScript</span>. I am continuously learning! Recently, I reached the 
              <span className="font-bold text-blue-400"> HR round</span> for a frontend role at Walmart and a backend role at Jupiter. I see this as a 
              <span className="font-bold text-blue-400"> sign of progress</span>, and I’m working hard to clear all remaining hurdles to land a great job.
              <br />
              <br />
              I’m eager to work, solve 
              <span className="font-bold text-blue-400"> challenging problems</span>, and tackle new opportunities. Looking forward to what’s next! 👩🏻‍💻
            </p>
          </div>

          {/* Image Section */}
          {/* <div
            className={`lg:w-1/3 lg:ml-10 p-6 border-2 border-blue-400 rounded-lg shadow-lg transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <img
              src={MyImage}
              alt="Silla's portrait"
              className="w-full h-auto rounded-md"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
