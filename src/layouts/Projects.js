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
									tags="<img src=&quot;https://img.icons8.com/color/48/000000/swiftui.png&quot; />
									<img src=&quot;https://img.icons8.com/color/48/000000/swift.png&quot; />
									<img src=&quot;https://img.icons8.com/color/48/000000/amazon-s3.png&quot; />
									<img src=&quot;https://img.icons8.com/color/48/000000/jira.png&quot; />
									"

								/>
								<WorkCard
									title="Busibord"
									text="A service that helps incredible local businesses to get online and grow their online presence."
									githublink="https://www.busibord.com"
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
									title="Pokemon Ball"
									text="Collaboratively built a top-down adventure game similar to Legend of Zelda with 9 different areas of
									explorable content on the map."
									tags="<img src=&quot;https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png&quot;/>"
									githublink="https://github.com/CSC335Spring2019/csc335-team-zelda-finalproject-ryan-denny-mayank-dominic"
								/>
								<Card
									title="Twitter"
									text="A Twitter clone that allows users to tweet, share and like tweets and follow users using Twitter API."
									tags="<img src=&quot;https://img.icons8.com/color/48/000000/swiftui.png&quot; />
									<img src=&quot;https://img.icons8.com/color/48/000000/swift.png&quot; />"
									githublink="https://github.com/mayankgandhi/Twitter"
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
