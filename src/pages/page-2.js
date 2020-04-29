import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/Card';

const SecondPage = () => (
	<div>
		<div className="Hero">
			<div className="HeroGroup">
				<h1>CheatSheets</h1>
				<p>
					Cheatsheets can be extremely handy for<br /> Devs who are out of touch of any particular language
				</p>
				<p>or could be a great place to start learning a new language</p>
			</div>
		</div>
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

export default SecondPage;
