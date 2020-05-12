import React from 'react';
import Card from '../components/Card';
import '../styles/Projects.css'
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
						<div id="card-1">
							<Card title="Photo Share" text="This is a photosharing project" />
						</div>
						<div id="card-2">
							<Card title="Photo Share" text="This is a photosharing project" />
						</div>
						<div id="card-3">
							<Card title="Photo Share" text="This is a photosharing project" />
						</div>
						<div id="card-4">
							<Card title="Photo Share" text="This is a photosharing project" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
