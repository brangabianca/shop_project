import "./Cv.style.css";
import { Button } from "reactstrap";
import React, { useState } from "react";

function Cv() {
	return (
		<div className='cv_container'>
			<div className='cv_description_container'>
				<h4>Hello,</h4>
				<h1>
					I'm <span>Bianca Branga</span>
				</h1>
				<h5> Junior Front-end Developer</h5>
				<p>
					I design and develop experiences that make people's lives simple
					through Web and Mobile apps. I work with HTML5, CSS3, JavaScript and
					React.
				</p>
				<Button>Download CV</Button>
			</div>
			<img id='cv_photo' src='cvphoto.png' alt='cvphoto' />
		</div>
	);
}
export default Cv;
