import React from 'react';
import './styles/App.css';
import Header from './Components/Header';
import Nav from './Components/Navigation'
import Section from './Components/Section';


function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Nav />
				<Section />
			</main>
		</div>
	);
}

export default App;
