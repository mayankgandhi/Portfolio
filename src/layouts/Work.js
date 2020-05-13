import React from 'react';
import Header from '../components/Header';
import '../styles/Work.css';
import WorkBox from '../components/WorkBox';

class Work extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<div className="WorkContent">
					<div className="Work Experience">
						<div className="Title">Work Experience</div>
						<WorkBox
							tags="<a href=&quot;https://www.getabord.com&quot; target=&quot;_blank&quot;>Abord LLC</a>"
							role="Product Engineer - Web  iOS"
							period="Mar '20 - Current"
							description={[
								'Translated design plans into full iOS app frameworks, delegating project components to appropriate team members while adhering to Apple Mobile Human Interface Guidelines',
								"Designed the infrastructure and APIs for User Authentication and Social Media functionality to ensure in app response times of <100ms using AWS Amplify and AWS AppSync's server less architecture",
								'Integrated various third-party solutions like Twilio API to add programmable chat for the users, Google Places API to enable location based place search, Algolia API to add search',
								"Applied Apple's Swift development language and MVVM design patterns to code native iOS application using SwiftUI and Combine frameworks"
							]}
						/>
						<WorkBox
							tags="<a href=&quot;https://www.cs.arizona.edu/&quot; target=&quot;_blank&quot;;>Department of Computer Science</a>"
							role="Undergraduate Teaching Assistant"
							period="Aug '19 - Dec '19"
							company="Department of Computer Science - UofA"
							description={[
								'Collaborated with faculty and other TAs to cultivate a supportive learning environment in CSC 335 - Object Oriented Programming course',
								'Coached students in methods for solving problems efficiently, presenting ideas concisely, and communicating with others effectively',
								'Mentored students through office hours and one-on-one communication',
								'Maintained atmosphere of academic learning and advancement to facilitate learning and development of critical thinking skills'
							]}
						/>
						<WorkBox
							role="Tech Fellow"
							period="June '18 - Feb '19"
							tags="<a href=&quot;https://www.codepath.org/&quot; target=&quot;_blank&quot;;>Codepath.org</a>"
							description={[
								'Increased the largest pipeline of high-performing underrepresented engineers in tech via Codepath, a nonprofit that has raised $1 million from Facebook and is bringing industry level courses to 23+ universities',
								'Taught Facebook-designed 12-week iOS course for two semesters on campus teaching 15+ students the fundamentals of app development through hands-on experience',
								'As an instructor, I was required to maintain a high-level of understanding of the curriculum topics including but not limited to: Software Development Life Cycle - Agile methodology, Object Oriented Design, building wireframes, Concurrent multi threaded code and Optimising code for performance'
							]}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Work;
