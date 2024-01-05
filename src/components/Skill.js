import React from 'react';
import image1 from "../img/h.png";
import image2 from "../img/c.png";
import image3 from "../img/ja.png";
import image4 from "../img/b.png";
import image5 from "../img/reac.png"

const Skill = () => {
  return (
    <div>
      
    <section id="skill">
        <div className="btn">
             <h1>SKILLS</h1>
                   <div className="row">
                          <div className="col card" id="box">
                            <img src={image1} alt="skill1"/>
                                 <div className="card-body">
                             <h3>HTML</h3>
                                </div>
                       </div>

                <div className="col card"id="box">
                    <img src={image2} alt="skill2" />
                        <div className="card-body">
                       <h3>CSS</h3>
                     </div>
                </div>

               <div className="col card"id="box">
                    <img src={image3} alt="skill3" />
                        <div className="card-body">
                        <h3>JAVASCRIPT</h3>
                   </div>
                  </div>

                <div className="col card"id="box">
                 <img src={image4} alt="skill4" />
                <div className="card-body">
                <h3>BOOTSTRAP</h3>
               </div>
              </div>
              <div className="col card"id="box">
    <img src={image5} alt="skill5" />
    <div className="card-body">
          <h3>REACT JS</h3>
     </div>
            </div>
         </div>
     </div>
  </section>


    </div>
  )
}

export default Skill
