import React from "react";
//import { ProgressBar } from 'react-bootstrap';
import Progress from "../reusableComponents/progressb";
import 'bootstrap/dist/css/bootstrap.min.css';
import './skilles.css'
const testData = [
  { skill: "C++", meterPercentage: 60 },
  { skill: "Javascript", meterPercentage: 30 },
  { skill: "react", meterPercentage: 53 },
];
const SkillsSection = () => {
  
  return (
    <section className="skills-section">
      <div className="container">
        <div className="row">
        <h1 className="hh">Skills</h1>
            <p className="hh">Add your skills details here</p>
          <div className="col-md-6">
            <p>my focus</p>
          <hr width="100px" />
          <p>UI UX design</p>
          <p>responcive</p>
          <p>web design</p>
                                         
          </div>
          <div className="col-md-6">
                {/* <Progress skill="html" meterPercentage={80}/>
                <Progress skill="css" meterPercentage={100}/>
                <Progress skill="JavaScript" meterPercentage={50}/>
                <Progress skill="react" meterPercentage={70}/>
                <Progress skill="photoshop" meterPercentage={90}/>
                <Progress skill="adope xp" meterPercentage={60}/>
                <Progress skill="node js" meterPercentage={50}/>
                <Progress skill="word press" meterPercentage={90}/> */}
                        
                {testData.map((item, idx) => (
                  <Progress key={idx} skill={item.skill} meterPercentage={item.meterPercentage} />
                ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
