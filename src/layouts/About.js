import React from 'react';
import Header from '../components/Header';
import '../styles/About.css';
import Lottie from 'react-lottie';
import programmerAnimation from '../images/8306-programming-animation.json';
import Footer from '../components/Footer';
import githubimage from '../images/GitHub-Mark-120px-plus.png';
import linkedinimage from '../images/LI-In-Bug.png';
import twitterlogo from '../images/Twitter_Logo_Blue.png';
import wfplogo from '../images/WFP-logo.png';

class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="AboutContainer">
				<div className="AboutContent">
					<div className="Hero">
						<h1>Hello World!</h1>
						<h3>My name is Mayank, I am a Full Stack Software Engineer and I love making stuff!<br />Stuff like this website, a mobile app or even some
						delicious food!</h3>
						<div className="LinkBox">
							<div className="GithubElement">
								<a href="https://github.com/mayankgandhi/" target="_blank">
									<img src={githubimage}/>
								</a>
							</div>
							<div className="LinkedinElement">
								<a href="https://linkedin.com/in/mayankgandhi98/" target="_blank">
									<img src={linkedinimage}/>
								</a>
							</div>
							<div className="EmailElement">
								<a
									href="mailto:mayankgandhi50@gmail.com?subject=Hi%20Mayank!%20I%20was%20on%20your%20website..."
									target="_blank"
								>
									<img src="https://img.icons8.com/color/48/000000/gmail.png"/>
								</a>
							</div>
							<div className="TwitterElement">
								<a href="https://twitter.com/mayankxgandhi" target="_blank">
								<img src={twitterlogo}/>
								</a>
							</div>
							<div className="ResumeElement">
								<a download href="https://firebasestorage.googleapis.com/v0/b/portfolio-a0075.appspot.com/o/ResumeMayankGandhi.pdf?alt=media&token=02ecc6c7-b63b-430b-82a8-6b4cbd9b0834" target="_blank">
								<img src="https://img.icons8.com/ios-filled/50/000000/resume.png"/>
								
								</a>
							</div>


							
						</div>
						<div className="DonateBox">
							<p>Please help by donating to UN WFP or any other Non-profit of your choice.</p> 
							<a href="https://donatenow.wfp.org/" target="_blank">
									<img src={wfplogo}/>
								</a>
						</div>
					</div>

					<div className="homeAnimation">
						<Lottie
							options={{
								loop: true,
								autoplay: true,
								animationData: programmerAnimation,
								rendererSettings: {
									preserveAspectRatio: 'xMidYMid slice'
								}
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
