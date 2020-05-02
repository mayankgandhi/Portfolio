import React from 'react';
import './Footer.css';

const Footer = (props) => (
	<div className="Footer">
        <div className="DevCredits">
			Designed and Developed by<br></br>Mayank Gandhi ©2020
		</div>
		<div className="GithubElement">
			<a href="#about">Github</a>
		</div>
		<div className="LinkedinElement">
			<a href="#projects">Linkedin</a>
		</div>
		<div className="EmailElement">
			<a href="#resume">Email</a>
		</div>
		<div className="TwitterElement">
			<a href="#contact">Twitter</a>
		</div>
	</div>
);
export default Footer;
