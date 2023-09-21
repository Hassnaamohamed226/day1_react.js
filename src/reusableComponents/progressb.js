import React from "react";
//import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './progress.css'
const Progress = (props) => {
  const { skill, meterPercentage } = props;
return (

  <div className="skill-meter">
    <h4>{skill}</h4>
    <div className="meter">
      <span
        className="meter-fill"
        style={{ width: `${meterPercentage}%` }}
      ></span>
    </div>
  </div>
)
}

export default Progress


