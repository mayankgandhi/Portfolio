import React from 'react';
import '../styles/Card.css';

const Card = (props) => (
	<div className="Card">
		<a href={props.githublink} target="_blank">
			<div className="CardTitle">
				<h3>{props.title}</h3>
				<img src="https://img.icons8.com/ios/50/000000/external-link.png" />
			</div>
			<h4>{props.text}</h4>
			<div dangerouslySetInnerHTML={{__html: props.tags}} />
		</a>
	</div>
);

export default Card;
