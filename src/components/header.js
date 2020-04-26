import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
	<div className="Header">
		<div className="HeaderGroup">
			Header
			<Link to="/"> <img src="" /></Link>
      <Link to="/resume">Resume</Link>
      <Link to="/connect">Connect</Link>
		</div>
	</div>
);

export default Header;
