import React from 'react';
import Card from '../components/Card';
import WorkCard from '../components/WorkCard';
import '../styles/Projects.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Projects extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<div className="ProjectsContent">
					<div className="projectsContainer">
						<div>
							<h2>Work Projects</h2>
							<div className="WorkProjects">
								<WorkCard
									title="Abord"
									text="A Social Media travel application that helps users to plan and share their travel experiences."
									githublink="https://www.getabord.com"
									stack="SwiftUI AWS"
									tags="<img src=&quot;https://img.icons8.com/color/48/000000/swiftui.png&quot; />
									<img src=&quot;https://img.icons8.com/color/48/000000/swift.png&quot; />
									"

								/>
								<WorkCard
									title="Busibord"
									text="A service that helps incredible local businesses to get online and grow their online presence."
									githublink="https://www.busibord.com"
									stack="React Gatsby.js"
									tags="
									<img src=&quot;https://img.icons8.com/color/48/000000/react-native.png&quot;/>
									<img src=&quot;https://img.icons8.com/color/48/000000/html-5.png&quot;/>
									<img src=&quot;https://img.icons8.com/color/48/000000/css3.png&quot;/>
									"
								/>
							</div>
						</div>

						<div>
							<h2>Fun Projects</h2>
							<div className="FunProjects">
								<Card
									title="BucketList"
									text="An iOS Application that lets users to add and share their travel bucketList and posts with friends."
									githublink="https://github.com/mayankgandhi/BucketList"
									tags="<img src=&quot;https://img.icons8.com/color/48/000000/swift.png&quot; />
									<img src=&quot;https://img.icons8.com/color/48/000000/heroku.png&quot; />"

								/>
								<Card
									title="HelpHumanity"
									text="A platform for users to connect with various non-profits and contribute to them."
									githublink="https://github.com/mayankgandhi/HelpHumanity"
									tags="<img src=&quot;https://img.icons8.com/color/48/000000/swiftui.png&quot; />
									<img src=&quot;https://img.icons8.com/color/48/000000/swift.png&quot; />
									<img src=&quot;https://img.icons8.com/color/48/000000/firebase.png&quot; />
									"
								/>
								<Card
									title="Yelp"
									text="A React website showcasing my skills, projects and background"
									stack="React Gatsby.js Firebase"
									githublink="https://github.com/mayankgandhi/Portfolio"
								/>
								<Card
									title="Twitter"
									text="A React website showcasing my skills, projects and background"
									stack="React Gatsby.js Firebase"
									githublink="https://github.com/mayankgandhi/Portfolio"
								/>
							</div>
						</div>
					</div>

				</div>
				<Footer />
			</div>
		);
	}
}

export default Projects;
