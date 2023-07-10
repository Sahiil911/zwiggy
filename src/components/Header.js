import React from "react";

const Header= ()=>{
return (
     <div className="header">
         <div className="logo-container">
         <img 
         className="logo"
         src= "https://t3.ftcdn.net/jpg/04/14/78/90/240_F_414789044_6xD0f4z9YcHfQimfnighWoUCIqgEJ66G.jpg"
           />
         </div>
     <div className="points">
     <ul>
         <li>Home</li>
         <li>About Us</li>
         <li>Contact Us</li>
         <li>Cart</li>
     </ul>
         </div>
     </div>
)
    };

    export default Header;