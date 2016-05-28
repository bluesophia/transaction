import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from '../components/Navbar';

class App extends Component {
    render() {
        return (
            <Navbar login={this.props.auth.login} />
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(App);