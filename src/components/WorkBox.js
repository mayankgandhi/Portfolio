import React from 'react';
import '../styles/WorkBox.css';

const WorkBox = (props) => (
	<div className="WorkBox">
		<div className="WorkInfo">
			<h3>{props.role}</h3>
			<h5>{props.period}</h5>
			<h4 dangerouslySetInnerHTML={{ __html: props.tags }} />
		</div>
		<p>
		<ul>
			<li>{props.description[0]}</li>
			<li>{props.description[1]}</li>
			<li>{props.description[2]}</li>
			<li>{props.description[3]}</li>
		</ul>
		</p>
	</div>
);
export default WorkBox;
