import React from 'react';
import Link from 'gatsby-link';
import About from '../layouts/About';
import Projects from '../layouts/Projects';
import Resume from '../layouts/Resume';
import Contact from '../layouts/Contact';

const IndexPage = () => (
	<div>
		<div className="container">
			<section id="about">
				<About />
			</section>
			<section id="projects">
				<Projects />
			</section>
			<section id="resume">
				<Resume />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</div>
	</div>
);

export default IndexPage;
