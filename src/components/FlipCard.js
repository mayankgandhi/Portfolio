import React from 'react';
import './FlipCard.css';

const FlipCard = (props) => (
	<div class="flip-card">
		<div class="flip-card-inner">
			<div class="flip-card-front">
			</div>
			<div class="flip-card-back">
				<h1>John Doe</h1>
				<p>Architect & Engineer</p>
				<p>We love that guy</p>
			</div>
		</div>
	</div>
);

export default FlipCard;
