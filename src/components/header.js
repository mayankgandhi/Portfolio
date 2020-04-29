import React from 'react';
import Link from 'gatsby-link';
import "./Header.css"

const Header = ({ siteTitle }) => (
	<div className="Header">
		<div className="HeaderGroup">
			Add yourLogo
	   <Link to="/"> <img src="" /></Link>
      <Link to="/cheatsheets">Cheatsheets</Link>
      <Link to="/resources">Resources</Link>
	  <Link to="/resume">Resume</Link>
      <Link to="/connect"> <button>Connect</button></Link>
	 
	  
		</div>
	</div>
);

export default Header;
