import React from 'react';
import Link from 'gatsby-link';
import Footer from '../components/Footer';
import Wave from '../components/Wave';
import AboutSection from '../components/AboutSection';

const IndexPage = () => (
	<div className="container">
		<div className="Hero">
			<div className="HeroGroup">
				<h4>Hi! My name is</h4>
				<h1>Mayank Gandhi</h1>
				<p>
					I'm a Full Stack Software Engineer passionate in building great mobile and web applications that
					make the internet a cooler place. This portfolio not only consists information about my projects and
					my experience but also has some resources that I like to use from time to time.
				</p>
				<Wave />
			</div>
		</div>
		<AboutSection title="About Me" subTitle="This is the aboutMe Section"/>
		<AboutSection title="About Me" subTitle="This is the aboutMe Section"/>
		<AboutSection title="About Me" subTitle="This is the aboutMe Section"/>
		<AboutSection title="About Me" subTitle="This is the aboutMe Section"/>

		<Footer />
	</div>
);

export default IndexPage;
