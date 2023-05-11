import React from "react";
import "../css/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul>
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
