import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./screens/Contact";
import About from "./screens/About";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div class="App">
			<Sidebar />
			<div class="content">
				<Router>
					<Switch>
						<Route path="/about">
							<About />
						</Route>
						<Route exact path="/">
							<Contact />
						</Route>
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
