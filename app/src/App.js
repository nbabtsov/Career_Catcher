import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';

class App extends React.Component {
	
	render(){
	  return (
		<div className="App">
		  <header className="App-header">
			<p>
			  Career Catcher
			</p>
		  </header>

		  <SearchBar />
		</div>
	  );
	}
}

export default App;
