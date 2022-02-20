import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// React Router DOM import (using Router here to cover the entire App, keeping it more clean looking)
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";


// Exporting the history
export const history = createBrowserHistory()

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);