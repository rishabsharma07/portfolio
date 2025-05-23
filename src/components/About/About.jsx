import React from "react";
// import ReactTypingEffect from 'react-typing-effect'
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
// import profileImage from "../../../public/RS_Logo.jpg"; // Adjust the path as necessary
const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="w-full text-center md:text-left mt-8 md:mt-0 ">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Rishab Sharma
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={["Coder","MERN Developer" ]}
              speed={10}
              // eraseSpeed={5}
              typingDelay={500}
              eraseDelay={2000}
              repeat={Infinity}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed text-justify">
           I'm a frontend-focused MERN Stack Developer who loves building sleek, responsive, and interactive web interfaces. With a strong command of React.js, JavaScript, HTML, CSS, and Tailwind, I specialize in translating design ideas into clean, high-performing user experiences. While my main focus is on the frontend, I also have solid knowledge of backend development using Node.js, Express, and MongoDB, as well as experience with machine learning to integrate intelligent features into web applications.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1D16fbOdMRnBr7tLz2nXhUtqBl_9YzSGK/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
          </div>
          {/* Right Side */}
          {/* <div className="md:w-1/2 flex justify-center md:justify-end text-amber-50">
            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20} 
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Rishab Sharma "
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              />
            </Tilt>
          </div> */}
        
      </div>
    </section>
  );
};

export default About;
