import './styles/App.css';
import Header from './Components/Header';
import Main from './Components/Main';

function App(props) {
	return (
		<div className="App">
			<Header />
			<Main store={props.store} dispatch={props.dispatch} />
		</div>
	);
}

export default App;
