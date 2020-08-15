import React from "react";
import "./Sidebar.css";
function Sidebar() {
	return (
		<div className="sidebar">
			<div class="app__profile">
				<div class="profile__avatar">
					<div class="picture">
						<img
							src="https://api.adorable.io/avatars/250/septian@dev.png"
							alt="avatar"
						/>
					</div>
					<div class="name">Septian Rifano</div>
					<div class="job">SEPTIANINET@GMAIL.COM</div>
				</div>
				<div class="profile__skill">
					<h6>Programming Skills</h6>
					<div class="progress-skill">
						<span class="out"></span>
						<span class="fill"></span>
					</div>
				</div>
				<div class="profile__bio">
					<h1>Biodata</h1>
					<div class="bio bio__birth">
						<span>Birth Date:</span>
						<span>06 Agustus 1998</span>
					</div>
					<div class="bio bio__city">
						<span>Birth City :</span>
						<span>Sragen</span>
					</div>
					<div class="bio bio__hobby">
						<span>Hobby :</span>
						<span>Coding and Soccer</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
