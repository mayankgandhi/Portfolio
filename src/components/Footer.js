import React from 'react';
import '../styles/Footer.css';

const Footer = (props) => (
	<div className="Footer">
        <div className="DevCredits">
			Designed and Developed by<br></br>Mayank Gandhi	<img src="https://bchiang7.github.io/img/emojis/rockon.png" style={{maxHeight: 20}}/>
 ©2020
		</div>
		<div className="SiteCredits">
			Repository on <a href="https://github.com/mayankgandhi/Portfolio" target="_blank">Github</a>
		</div>
	</div>
);
export default Footer;
