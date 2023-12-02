import React from "react";
import AnimeImage from "./Images/dalton-anime-avatar.png";

const Home = () => {
  return (
    <>
      <div className="Home-Header">
        <h1>Home</h1>
      </div>
      <div className="Anime-Avatar">
        <img src={AnimeImage} height={194} width={197}></img>
      </div>
      <div className="Home-P">
        <p>
          Hello, I'm Dalton McAuliffe, an ARMY Veteran with a deep passion for
          software development and a keen interest in understanding how software
          works. I am on a continuous journey of learning, always challenging
          myself to higher standards of knowledge and expertise in the field. My
          military background has instilled in me a strong sense of discipline,
          teamwork, and dedication. I excel in group environments, thriving on
          collaboration and efficiently completing tasks to meet and exceed the
          established standards. I find immense satisfaction in unraveling the
          complexities of software, embracing challenges, and finding innovative
          solutions. As I progress in my software development journey, I am
          excited to apply the skills and mindset I developed in the military to
          create efficient, effective, and innovative software solutions. I am
          always open to new opportunities, collaborations, and learning
          experiences in the world of technology. Let's connect and explore the
          endless possibilities of software development together!
        </p>
      </div>
      <div className="Skills-List">
        <h2>Skills</h2>
        <h3>CSS</h3> 
        <h3>HTML</h3> 
        <h3>React</h3> 
        <h3>Ruby</h3> 
        <h3>Ruby on Rails</h3>
        <h3>PostgreSQL</h3>
      </div>
    </>
  );
};

export default Home;
