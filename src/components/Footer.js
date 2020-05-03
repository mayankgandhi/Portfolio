import React from 'react';
import './Footer.css';

const Footer = (props) => (
	<div className="Footer">
        <div className="DevCredits">
			Designed and Developed by<br></br>Mayank Gandhi ©2020
		</div>
		<div className="GithubElement">
			<a href="https://github.com/mayankgandhi/" target="_blank">Github</a>
		</div>
		<div className="LinkedinElement" >
			<a href="https://linkedin.com/in/mayankgandhi98/" target="_blank">Linkedin</a>
		</div>
		<div className="EmailElement">
			<a href="mailto:mayankgandhi50@gmail.com?subject=Hey%20Dude.%20I%20was%20on%20your%20website..." target="_blank">Email</a>
		</div>
		<div className="TwitterElement">
			<a href="#https://twitter.com/mayankxgandhi" target="_blank">Twitter</a>
		</div>
	</div>
);
export default Footer;
