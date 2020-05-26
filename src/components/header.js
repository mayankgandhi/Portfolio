import React from 'react';
import '../styles/Header.css';
import GatsbyLink from 'gatsby-link';

const Header = (props) => (
	<div className="Header">
				<h2>Mayank Gandhi</h2>
				<a href="#about">About</a>
				<a href="#projects">Projects</a>
				<a href="#work">Work</a>
				<a href="#education">Education</a>
				<a href="/resources">Resources</a>
	</div>
);
export default Header;
