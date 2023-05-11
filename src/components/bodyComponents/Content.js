import React from "react";
import Group1 from "../contentComponents/Group1";
import Group2 from "../contentComponents/Group2";
import "../../css/content.css";

const Content = () => {
  return (
    <div className="content-container">
      <img src="/images/logoNCC1.png" alt="NCC logo" />
      <Group1 />
      <div className="display-flex">
        <Group2 img="/images/css-icon1.png" alt="css icon" />
        <Group2 img="/images/html-icon1.png" alt="html icon" />
        <Group2 img="/images/url-icon1.png" alt="url icon" />
      </div>
    </div>
  );
};

export default Content;
