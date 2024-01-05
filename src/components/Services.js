import React from 'react';
import image1 from "../img/d.jpeg";
import image2 from "../img/app.jpeg";
import image3 from "../img/download.jpeg";
import image4 from "../img/elearning.jpeg";

const Services = () => {
  return (
    <div>
       <section id="services">
           <marquee>
               &copy; 2023 welcome to my service page | thank you for visited my protfolio &copy;
              </marquee>
             <h1>SERVICES</h1>
                <div className="row" id="ser">
                <div className=" col card">
                     <img src={image1}  alt="Service 1" />
                      <div className="card-body">
                      <h2>Frontend Development</h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo libero unde vel,
                        suscipit necessitatibus debitis eius rerum sed iusto quisquam.
                      </p>
                </div>
            </div>

          <div className="col card">
            <img src={image2}  alt="Service 1" />  
                    <div className="card-body">
                          <h2> App Development</h2>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo libero unde vel,
                             suscipit necessitatibus debitis eius rerum sed iusto quisquam.
                         </p>
                  </div>
                </div>
            

            
                <div className=" col card">
                    <img src={image3}  alt="Service 1" />
                    <div className="card-body">
                          <h2>Web Development</h2>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo libero unde vel,
                            suscipit necessitatibus debitis eius rerum sed iusto quisquam.</p>
                  </div>
                </div>
    
                    <div className="col card">
                        <img src={image4}  alt="Service 1" />
                        <div className="card-body">
                               <h2>Website Design</h2>
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo libero unde vel,
                                suscipit necessitatibus debitis eius rerum sed iusto quisquam.
                             </p>
                      </div>
                    </div>
                 </div>
        
    </section>

    </div>
  )
}

export default Services
