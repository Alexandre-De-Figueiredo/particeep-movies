import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reportWebVitals from "./reportWebVitals";
import App from "./App";
import moviesReducer from "./store/reducers/movies";
import "./index.css";

const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
	movies: moviesReducer,
});

const store = createStore(rootReducer, composeEnhancers, applyMiddleware(thunk));

const app = (
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

ReactDOM.render(app, document.getElementById("root"));

reportWebVitals();
