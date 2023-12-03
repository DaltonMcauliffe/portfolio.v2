import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {
  return (
    <>
    <div className='Contact-Header'>
    <h1>Contacts</h1>
    </div>
    <div className='Links'>
    <a href='https://github.com/DaltonMcauliffe' target='blank'><FaGithub />Github</a>
    <br></br>
    <a href='https://www.linkedin.com/in/dalton-mcauliffe/' target='blank'><FaLinkedin />LinkedIn</a>
    
    </div>
    </>
    
  )
}

export default Contact