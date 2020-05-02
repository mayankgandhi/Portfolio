import React from 'react';
import Card from '../../components/Card';
import './Projects.css';
import Header from '../../components/Header'


class Projects extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<div className="projectsSection">
					<h1>Projects Section</h1>
					This is the project Section
					<div className="ListProjects">
						<Card title="Photo Share" text="This is a photosharing project" />
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
