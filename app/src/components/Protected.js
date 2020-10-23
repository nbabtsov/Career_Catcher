
import React from 'react';
import SearchBar from './SearchBar';
import './App.css';


const Protected = () => {
	return (
		<div className="App">
			<header className="App-header">
				<p>logged in successfully!</p>
			</header>
			<SearchBar />
		</div>
	)
}

export default Protected;
