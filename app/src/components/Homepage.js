import React from 'react';
import './App.css';
import JSTabs from './JSTabs.js'
import styled from 'styled-components'

const Homepage = () => {
	return (
		<div className="App">
			<Header className="App-header">
				<p>Career Catcher</p>
			</Header>
			<JSTabs />
			<img src="JobSearch.jpg" />
		</div>
	)
}

const Header = styled.header`
	color: #4169E1;
`

export default Homepage;