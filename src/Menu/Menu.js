import React from 'react';

import {
  Link
}from "react-router-dom";
function Menu() {
  return (
<div className="menu">
  <nav
      role="navigation"
      aria-label="main menu"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
      ></nav>
        <ul>
            <li><Link itemProp="url" to="/">Homepage</Link></li>
            <li><Link itemProp="url" to="/about">About</Link></li>
            <li><Link itemProp="url" to="/login.html">Login</Link></li>
            <li><Link itemProp="url" to="https://google.com">Google</Link></li>
            {/* <!-- This is an A11y Change, giving type attribute 
                to a input is accessibility enhancement here--> */}
            <li><input type="text" className="search-bar" placeholder="Search.."/></li>
            {/* <!-- <style> //profile icon code from BB */}
        {/* <div style={{ width: '100px', height: '80px' }}> */}
  
       {/* <img src="./public/profile pic logo.webp" alt="Profile" /> */}
      {/* </div> */}
           
        </ul>
         {/* <!-- This is an A11y Change --> */}
        <img className= "image" src="/profile pic logo.webp" alt="profile"/>
        <div style={{ width: '100px', height: '80px' }}>
  
       {/* <img src="./public/profile pic logo.webp" alt="Profile" /> */}
      </div>
           
    </div>
    
  );
}

export default Menu;
