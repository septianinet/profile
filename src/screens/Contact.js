import React from "react";
import "./Contact.css";
import { useSpring, animated, config } from "react-spring";

function Contact() {
	const props = useSpring({
		from: { opacity: 0, marginLeft: -50 },
		to: { opacity: 1, marginLeft: 0 },
		config: config.gentle,
	});

	return (
		<div class="contact">
			<div class="app__contact">
				<animated.div
					class="contact__name"
					style={{ opacity: props.opacity, marginLeft: props.marginLeft }}
				>
					<span>SEPTIAN RIFANO - PROGRAMMER</span>
				</animated.div>
				<animated.div
					class="contact__paragraph"
					style={{ opacity: props.opacity, marginLeft: props.marginLeft }}
				>
					<h1>CONTACT</h1>
					<p class="desc">
						Interested in working together, I'm a programmer, <br />I like
						coding, and I like to learn a new stuff.
					</p>
				</animated.div>
				<animated.div
					class="contact__social-media"
					style={{ opacity: props.opacity, marginLeft: props.marginLeft }}
				>
					<h3>or the fancy way</h3>
					<a href="/#" class="social-media__button instagram">
						<i class="fab fa-instagram-square"></i>
					</a>
					<a href="/#" class="social-media__button facebook">
						<i class="fab fa-facebook-square"></i>
					</a>
					<a href="/#" class="social-media__button twitter">
						<i class="fab fa-twitter-square"></i>
					</a>
				</animated.div>
			</div>
		</div>
	);
}

export default Contact;
