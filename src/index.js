import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory  } from 'react-router';
import routes from './routes.js';
import configureStore from './store/configureStore';
import './style.scss';

const store = configureStore();

render (
    <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);
