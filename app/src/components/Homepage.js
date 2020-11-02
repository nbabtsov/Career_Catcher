import React from 'react';
import './App.css';
import KeyWordSearch from './KeyWordSearch';


const Homepage = () => {
	return (
		<div className="App">
			<header className="App-header">
				<p>Career Catcher</p>
			</header>
			<KeyWordSearch />
		</div>
	)
}

export default Homepage;