import React from 'react'
import image1 from "../img/todolist.jpeg";
import image2 from "../img/cal.jpeg";
import image3 from "../img/e.jpeg";

const Project = () => {
  return (
    <div>
       <section id="projects">
        <div className="btn">
        <h1>PROJECTS</h1>
        <div className="row">
            <div className=" col card">
                <img src={image2} alt="Project 1" className="card-img-top"/>
                <div className="card-body">
                      <h2>CALCULATOR</h2>
                      <p>A calculator app is an application that allows users to perform mathematical 
                        calculations quickly and easily. It typically includes a user interface with numeric buttons, 
                        mathematical operation button  and a display screen to show the entered values and results.</p>
                      
                      <br/>
                        <a href="#">Learn More</a>
              </div>
            </div>

          <div className="col card">
            <img src={image1} alt="Project 1" className="card-img-top"/>  
                    <div className="card-body">
                          <h2>TO-DO LIST</h2>
                          <p>to-do list project is a powerful tool that aids in task
                            management, goal tracking, and time optimization. It promotes organization,and  prioritization,
                             and productivity, enabling individuals and teams to stay
                            focused and accomplish their objectives more efficiently.</p>
                         <br/>
                        <a href="#" >Learn More</a>
                  </div>
                </div>
            
            
                <div className="col card">
                    <img src={image3} alt="Project 1" className="card-img-top"/>
                    <div className="card-body">
                          <h2>NGO WEBSITE</h2>
                          <p>
                        NGO website projects focus on creating 
                        informative, accessible platforms that spotlight social causes, encourage 
                        engagement, and facilitate support. They prioritize user-friendly interfaces,
                         interactive features showcasing ongoing initiatives, and streamlined pathways for
                          donations, volunteering, and sharing impactful stories to inspire action and involvement.</p>
                         <br/>
                         <a href="#">Learn More</a>
                  </div>
                </div>
             </div>
             </div>
    </section>
    
    </div>
  )
}

export default Project
