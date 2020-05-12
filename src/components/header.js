import React from 'react';
import '../styles/Header.css';

const Header = (props) => (
	<div className="Header">
			<div className="Logo">
				<h2>Mayank Gandhi</h2>
			</div>
			<div className="AboutElement">
				<a href="#about">About</a>
			</div>
			<div className="ProjectsElement">
				<a href="#projects">Projects</a>
			</div>
			<div className="ResumeElement">
				<a href="#resume">Resume</a>
			</div>
			<div className="ContactElement">
				<a href="#contact">Contact</a>
			</div>
	</div>
);
export default Header;
