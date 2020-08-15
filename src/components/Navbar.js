import React from "react";
import { Link } from "react-router-dom";
import { animated } from "react-spring";
function Navbar(props) {
	return (
		<div>
			<animated.div class="contact__navbar" style={props.style}>
				<ul>
					<li class="link">
						<Link to="/">ABOUT ME</Link>
					</li>
					<li class="link">
						<Link to="/contact">CONTACT</Link>
					</li>
				</ul>
			</animated.div>
		</div>
	);
}

export default Navbar;
