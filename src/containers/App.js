import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/Login';

import * as authActions from '../actions/authActions';

class App extends Component {
    render() {
        const { isLogin, progress } = this.props.auth;
        const { login, logout } = this.props.authActions;
        return (
            <div className="app__body">
                <div className="app__wrap">
                    <div className='container'>
                        <Navbar isLogin={isLogin} progress={progress} logout={logout} />
                        {isLogin ? this.props.children : <Login auth={this.props.auth} login={login} />}
                    </div>
                    <div className="push"></div>
                </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
