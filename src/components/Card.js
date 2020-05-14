import React from 'react';
import '../styles/Card.css';

const Card = (props) => (
	<div className="Card">
		<a href="https://linkedin.com/in/mayankgandhi98/" target="_blank">
			<div className="CardTitle">
				<h3>{props.title}</h3>
				<img src="https://img.icons8.com/ios/50/000000/external-link.png" />
			</div>
			<h4>{props.text}</h4>
			<h5>{props.stack}</h5>
		</a>
	</div>
);

export default Card;
