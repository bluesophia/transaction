import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/Login';

import * as authActions from '../actions/authActions';
import * as transactionActions from '../actions/transactionActions';

class App extends Component {
    render() {
        const { isLogin, progress } = this.props.auth;
        const { login, logout } = this.props.authActions;
        return (
            <div>
                <Navbar isLogin={isLogin} progress={progress} logout={logout} />
                <div className='container'>
                    {isLogin ? this.props.children : <Login auth={this.props.auth} login={login} />}
                </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        transaction: state.transaction
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch),
        transactionActions: bindActionCreators(transactionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
