import store from './Redux/redux-store';
import ReactDOM from "react-dom/client";
import React from 'react';
import App from './App';
import './styles/index.css';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderDOM = (state) => {
	root.render(
		<BrowserRouter>
			<App state={state} store={store}
				dispatch={store.dispatch.bind(store)} />
		</BrowserRouter>
	);
}

rerenderDOM(store.getState());

store.subscribe(() => {
	let state = store.getState();
	rerenderDOM(state);	
});