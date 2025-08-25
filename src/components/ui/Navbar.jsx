import React from "react";
import "../../assets/Navbar.css";
const Navbar = () => {
    return (
        <nav>
            {/*<a href="/" style={{ width: "20%" }}>*/}
            {/*  <img*/}
            {/*    width="100%"*/}
            {/*    height="auto"*/}
            {/*    style={{ objectFit: "cover" }}*/}
            {/*    src="https://i.ibb.co/PZ6t1W66/cebaf008-edd3-4303-a200-03ce4914ac46-removalai-preview.png"*/}
            {/*    alt="NaqshbandHunarmadlari Logo"*/}
            {/*  />*/}
            {/*</a>*/}
            <h1>KORXONA NOMI</h1>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About </a>
                </li>
                <li>
                    <a href="#OurProducts">Our Products</a>
                </li>
                <li>
                    <a href="#Footer">Contacts</a>
                </li>
            </ul>
            {/* LANG PROVIDER */}
        </nav>
    );
};

export default Navbar;
