import React from 'react';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
	try {
		stylesStr = require(`!raw-loader!../public/styles.css`);
	} catch (e) {
		console.log(e);
	}
}

module.exports = class HTML extends React.Component {
	render() {
		let css;

		if (process.env.NODE_ENV === `production`) {
			css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: stylesStr }} />;
		}
		return (
			<html {...this.props.htmlAttributes}>
				<head>
					<meta charSet="utf-8" />
					<meta httpEquiv="x-ua-compatible" content="ie=edge" />
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
					{this.props.headComponents}
					{css}
				</head>
				<body {...this.props.bodyAttributes}>
					{this.props.preBodyComponents}
					<div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
					{this.props.postBodyComponents}

					<script
						dangerouslySetInnerHTML={{
							__html: `
							<!-- The core Firebase JS SDK is always required and must be listed first -->
							<script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js"></script>
							
							<!-- TODO: Add SDKs for Firebase products that you want to use
								 https://firebase.google.com/docs/web/setup#available-libraries -->
							<script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-analytics.js"></script>
							
							<script>
							  // Your web app's Firebase configuration
							  var firebaseConfig = {
								apiKey: "AIzaSyDY0FOCZKMh3l705qyGf-QoTnbojH1zptw",
								authDomain: "portfolio-4244f.firebaseapp.com",
								databaseURL: "https://portfolio-4244f.firebaseio.com",
								projectId: "portfolio-4244f",
								storageBucket: "portfolio-4244f.appspot.com",
								messagingSenderId: "243305304700",
								appId: "1:243305304700:web:88b2099aa0e7d87a6aeff9",
								measurementId: "G-2GEZ6X5CXW"
							  };
							  // Initialize Firebase
							  firebase.initializeApp(firebaseConfig);
							  firebase.analytics();
							  console.log("Firebase Done.")
							</script>
        `
						}}
					/>
				</body>
			</html>
		);
	}
};
