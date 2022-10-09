import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Main from './Components/Main';

function App(props) {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Main appState={props.appState} />
			</div>
		</BrowserRouter>
	);
}

export default App;
