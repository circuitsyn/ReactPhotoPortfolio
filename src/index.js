import React from 'react';
// config.js
// import dotenv from "dotenv";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import * as contentful from 'contentful'
import $ from 'jquery';
import Popper from 'popper.js';

// Redux Store
import { Provider } from 'react-redux'
import { configureStore } from '../src/store'
import { loadBlog } from './store/Blog'

const store = configureStore()
store.dispatch(loadBlog())

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
