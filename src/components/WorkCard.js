import React from 'react';
import '../styles/WorkCard.css';

const WorkCard = (props) => (
	<div className="WorkCard">
		<a href={props.githublink} target="_blank">
			<div className="WorkCardTitle">
				<h3>{props.title}</h3>
				<img src="https://img.icons8.com/ios/50/000000/external-link.png" />
			</div>
			<h4>{props.text}</h4>
			<h5>{props.stack}</h5>
			<div dangerouslySetInnerHTML={{__html: props.tags}} />
		</a>
	</div>
);

export default WorkCard;
