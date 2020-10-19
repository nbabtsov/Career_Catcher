import React from 'react';
import SearchBar from './SearchBar';
import './App.css';


const Homepage = () => {
	return (
		<div className="App">
			<header className="App-header">
				<p>Career Catcher</p>
			</header>
			<SearchBar />
		</div>
	)
}

export default Homepage;