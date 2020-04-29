import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/Card';

const connectPage = () => (
	<div className="ConnectPage">
		<div className="Cards">
			<h2>5 CheatSheets, more coming...</h2>
			<div className="CardGroup">
				<Card title="DesignSystem" text="10 sections" />
				<Card title="React for Designers" text="11 sections" />
				<Card title="Sound Design" text="5 sections" />
				<Card title="ARKit 2" text="10 sections" />
			</div>
		</div>
	</div>
);

export default connectPage;
