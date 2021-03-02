import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";

// Redux imports
import rootReducer from './store/reducers/rootReducer';
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const middlewares = [promise, thunk];

if (process.env.NODE_ENV === `development`) {
    const {logger} = require(`redux-logger`);

    middlewares.push(logger);
}
const store = composeWithDevTools(applyMiddleware(...middlewares))(createStore)(rootReducer);

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
