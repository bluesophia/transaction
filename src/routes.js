import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './components/Home';
import Transaction from './components/Transaction';
import Table from './components/Table';

const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path="transaction" component={Transaction} />
            <Route path="table" component={Table} />
        </Route>
    </div>
);

export default routes;
