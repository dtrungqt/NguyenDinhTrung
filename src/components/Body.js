import React from "react";
import Content from "./bodyComponents/Content";
import Footer from "./bodyComponents/Footer";
import "../css/body.css";

const Body = () => {
  return (
    <div className="body-container">
      <Content />
      <Footer />
    </div>
  );
};

export default Body;
