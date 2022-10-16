import store from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';

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
store.subscribe(rerenderDOM);