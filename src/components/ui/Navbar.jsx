import React from "react";
import "../../assets/Navbar.css"
const Navbar = () => {
  return (
    <nav>
      <h1>#CompanyLogo</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About </a>
        </li>
        <li>
          <a href="#">Our Products</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
      {/* LANG PROVIDER */}
    </nav>
  );
};

export default Navbar;
