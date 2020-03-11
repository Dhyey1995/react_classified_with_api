import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage';

function App() {
	return (
		<section>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/about_us" component={AboutPage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/register" component={RegisterPage} />
				</Switch>
			</BrowserRouter>
		</section>
	);
}

export default App;
