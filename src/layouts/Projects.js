import React from 'react';
import Card from '../components/Card';
import '../styles/Projects.css';
import Header from '../components/Header';

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
					<div className="ListProjects">
						<Card title="Photo Share" text="This is a photosharing project" />
						<Card title="Photo Share" text="This is a photosharing project" />
						<Card title="Photo Share" text="This is a photosharing project" />
						<Card title="Photo Share" text="This is a photosharing project" />
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
