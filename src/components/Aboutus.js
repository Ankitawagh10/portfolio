import React from 'react';
import image from "../img/pic.png";

const Aboutus = () => {
  return (
    <div>
      
   
    <section id="about-section">
        <div className="image-wrapper">
            <img src={image} alt="profile"/>
        </div>
        <div className="content-wrapper"> 
            <h1>I'M
                <span className="role"></span></h1>
               
            <p>This is my official portfolio website to showes all
             Details and work explains web development.</p><br/>
             <button><a href="https://drive.google.com/file/d/1UB4SRdPhdsPnVFWjhkvebutpXTVNNG5a/view?usp=drive_link">DOWNLOAD CV</a></button>
            <button> <a href="https://www.linkedin.com/in/ankita-wagh">Hire Me</a></button>
                </div>

    </section>
    </div>
  )
}

export default Aboutus
