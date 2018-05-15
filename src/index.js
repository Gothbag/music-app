import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import musicApp from "./reducers";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

const store = createStore(musicApp,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>, 
document.getElementById("root"));
registerServiceWorker();
