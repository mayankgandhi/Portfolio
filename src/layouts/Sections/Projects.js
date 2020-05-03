import React from 'react';
import Card from '../../components/Card';
import './Projects.css';
import Header from '../../components/Header'
import FlipCard from '../../components/FlipCard';


class Projects extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<div className="ProjectsContent">
					<h1>Projects Section</h1>
					This is the project Section
					<div className="ListProjects">
						<Card title="Photo Share" text="This is a photosharing project" />
						<FlipCard />
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
