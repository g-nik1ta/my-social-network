import store from './Redux/redux-store';
import ReactDOM from "react-dom/client";
import React from 'react';
import App from './App';
import './styles/index.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

// let rerenderDOM = (state) => {

	root.render(
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	);

// }

// rerenderDOM(store.getState());

// store.subscribe(() => {
// 	let state = store.getState();
// 	rerenderDOM(state);
// });