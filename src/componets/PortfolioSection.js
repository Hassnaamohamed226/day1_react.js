import React from "react";
import Card from "../reusableComponents/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './portfol.css'
let cardsList = [
  { text: "Web Design" },
  { text: "Mobile Design" },
  { text: "Logo Design" },
  { text: "Web Application Development" },
  { text: "Mobile Application Development" },
  { text: "PWA Development" },
];
const PortfolioSection = () => {
 
  return (
    <section className="portfolio-section">
      
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 py-2 ">
            {cardsList.map((item, index) => {
              let color = "";
              if (index % 2 === 0) {
                color = "bg-secondary";
              } else {
                color = "bg-dark";
              }
              return <Card color={color} key ={index} text={item.text}></Card>;
            })}
            {/* <Card color="bg-secondary" text="Web Design"></Card>
            <Card color="bg-dark" text="Mobile Design"></Card>
            <Card color="bg-secondary" text="Logo Design"></Card>
            <Card color="bg-dark" text="Web Application Development"></Card>
            <Card
              color="bg-secondary"
              text="Mobile Application Development"
            ></Card>
            <Card color="bg-dark" text="PWA Development"></Card> */}
          </div>
     {/*  <div className="port">
      <Card title="This is the card text"  />
      <Card title="This is the card text2"  />
      <Card title="This is the card text"  />
      
      </div>
      <div className="port">
      <Card title="This is the card text"  />
      <Card title="This is the card text2"  />
      <Card title="This is the card text"  />
      
      </div> */}
        
    </section>
  );
};

export default PortfolioSection;
