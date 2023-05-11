import React from "react";
import "../../css/group2.css";

const Group2 = (props) => {
  return (
    <div className="group2-container">
      <h2>Lorem ipsum dolor sit amet</h2>
      <div className="clearfix">
        <img src={props.img} alt={props.alt} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
          sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
          massa in metus bibendum congue. Pellentesque ultrices liquam egestas
          nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
          est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum
          mattis.
        </p>
      </div>
    </div>
  );
};

export default Group2;
