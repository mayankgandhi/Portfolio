import React from 'react';
import './ResumePage.css';
import FlipCard from '../components/FlipCard'
const ResumePage = (props) => (
	<div className="ResumePage">
		<div className="Title">
			<h2>Mayank Gandhi - Resume</h2>
		</div>
		<div className="Work">
			<FlipCard />
			<h3>Work Experience</h3>
            <h4>Product Engineer@<bold>Abord</bold></h4>
			<p>
				Translated design plans into full iOS app frameworks, delegating project components to appropriate team
				members while adhering to Apple Mobile Human Interface Guidelines Designed the infrastructure and APIs
				for User Authentication and Social Media functionality to ensure in app response times of less than
				100ms using AWS Amplify and AWS AppSync's server less architecture Integrated various third-party
				solutions like Twilio API to add programmable chat for the users, Google Places API to enable location
				based place search, Algolia API to add search - Applied Apple's Swift development language and MVVM
				design patterns to code native iOS application using SwiftUI and Combine frameworks
			</p>
            <h4>Tech Fellow@<bold>Codepath.org</bold></h4>
			<p>
				Increased the largest pipeline of high-performing underrepresented engineers in tech via Codepath, a
				nonprofit that has raised $1 million from Facebook and is bringing industry level courses to 23+
				universities - Taught Facebook-designed 12-week iOS course for two semesters on campus teaching 15+
				students the fundamentals of app development through hands-on experience - As an instructor, I was
				required to maintain a high-level of understanding of the curriculum topics including but not limited
				to: Software Development Life Cycle - Agile methodology, Object Oriented Design, building wireframes,
				Concurrent multi threaded code and Optimising code for performance{' '}
			</p>
            <h4>Undergraduate Teaching Assistant@<bold>University of Arizona</bold></h4>
			<p>
				Collaborated with faculty and other TAs to cultivate a supportive learning environment in CSC 335 -
				Object Oriented Programming course and Coach students in methods for solving problems efficiently,
				presenting ideas concisely, and communicating with others effectively - Mentored students through office
				hours and one-on-one communication - Maintained atmosphere of academic learning and advancement to
				facilitate learning and development of critical thinking skills{' '}
			</p>
            <h4>SDE Intern@<bold>AskAtlas.ai</bold></h4>
			<p>
				Collaborated with the co-founder on a cloud application for the first open source Marketing AI and
				Analytics Platform - Created Entity-Relationship models and designed Relational Database Schema -
				Personally Responsible for developing a JSON based REST API to allow user authentication for Web and
				Mobile apps
			</p>
		</div>
		<div className="Education">
			<h3>Education</h3>
            <p>University of Arizona, Tucson, AZ
Graduation: December 2019
Bachelor of Science in Computer Science
Minor in Business Administration
Relevant Course Work
Analysis of Discrete Structures, Database Design,
Compilers and System Software, Automata,
Grammars and Languages, Green Computing,
Object Oriented Programming, Systems
Programming and UNIX</p>
		</div>
		<div className="Skills">
			<h3>Skills</h3>
		</div>
		<div className="certification">
			<h3>Certification</h3>
		</div>
	</div>
);
export default ResumePage;
