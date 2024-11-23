import Resume from '../docu/Silla_K__Resume_SDE.pdf'; // Import your resume file

const Intro = () => {


  return (
    <div className="py-16 text-white" id="intro">
      <div className="max-w-screen-lg mx-auto px-6">
        <h1
          className="text-5xl font-bold mb-4 transition-all duration-1000 ease-in"
        >
          Hi, I'm Silla 👋
        </h1>
        <h1
          className="text-5xl font-bold mb-4"
        >
          I'm a software developer,
        </h1>
        <p
          className="text-2sm bg-white-900 font-light mb-8">
          with a passion for building dynamic, efficient, and scalable applications. Let’s
          build something amazing together!
        </p>

        {/* Alert Section */}
        <div
          className="bg-gray-900 text-white p-4 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-2">📢 Currently Looking for Opportunities</h3>
          <p className="text-md mb-4">
            I’m actively searching for a software development role. If you have any leads, recommendations, or
            connections, I’d be incredibly grateful for your support!
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => (window.location.href = 'mailto:silla.k.careers@gmail.com')}
              className="bg-blue-500 text-center text-sm text-white-900 font-semibold py-2 px-4 rounded-full shadow  hover:scale-105 transform transition duration-300"
            >
              Let’s Connect
            </button>
            <a
              href={Resume}
              download
              className="bg-blue-500 text-center text-sm text-white-900 font-semibold py-2 px-4 rounded-full shadow  hover:scale-105 transform transition duration-300"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
