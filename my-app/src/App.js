import './styles/App.css';
import Header from './Components/Header';
import Main from './Components/Main';

function App(props) {
	return (
		<div className="App">
			<Header />
			<Main chat={props.state.chat} dispatch={props.dispatch} />
		</div>
	);
}

export default App;
