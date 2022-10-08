import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Main />
			</div>
		</BrowserRouter>
	);
}

export default App;
