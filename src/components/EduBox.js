import React from 'react';
import '../styles/EduBox.css';

const EduBox = (props) => (
	<div className="EduBox">
			<h2>{props.school}</h2>
			<h3>{props.degree}</h3>
			<h5>{props.period}</h5>
			<h5>{props.description}</h5>
	</div>
);

export default EduBox;
