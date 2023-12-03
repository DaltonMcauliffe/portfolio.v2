import React from "react";
import AnimeImage from "./Images/dalton-anime-avatar.png";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRuby } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <div className="Home-Header">
        <h1>Home</h1>
      </div>
      <div className="Content-Container">
        <div className="Anime-Avatar"></div>
        <img src={AnimeImage} height={492} width={450}></img>
        <div className="Home-Container-P" height={700} width={800}>
          <div className="Home-P">
            <p>
              Hello, I'm Dalton McAuliffe, an ARMY Veteran with a deep passion
              for software development and a keen interest in understanding how
              software works. I am on a continuous journey of learning, always
              challenging myself to higher standards of knowledge and expertise
              in the field. My military background has instilled in me a strong
              sense of discipline, teamwork, and dedication. I excel in group
              environments, thriving on collaboration and efficiently completing
              tasks to meet and exceed the established standards. I find immense
              satisfaction in unraveling the complexities of software, embracing
              challenges, and finding innovative solutions. As I progress in my
              software development journey, I am excited to apply the skills and
              mindset I developed in the military to create efficient,
              effective, and innovative software solutions. I am always open to
              new opportunities, collaborations, and learning experiences in the
              world of technology. Let's connect and explore the endless
              possibilities of software development together!
            </p>
          </div>
        </div>
      </div>
      <div className="Skills-List-Background">
        <div className="Skills-List">
          <h1>Skills</h1>
          <h3>
            <FaCss3Alt />
            CSS
          </h3>
          <h3>
            <FaHtml5 /> HTML
          </h3>
          <h3>
            <FaReact /> React
          </h3>
          <h3>
            <SiRuby /> Ruby
          </h3>
          <h3>
            <SiRubyonrails /> Ruby on Rails
          </h3>
          <h3>
            <BiLogoPostgresql /> PostgreSQL
          </h3>
        </div>
      </div>
    </>
  );
};

export default Home;
