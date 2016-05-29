import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import TransactionPage from './containers/TransactionPage';
import TablePage from './containers/TablePage';
import Home from './components/Home';

const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path="transaction" component={TransactionPage} />
            <Route path="table" component={TablePage} />
        </Route>
    </div>
);

export default routes;
