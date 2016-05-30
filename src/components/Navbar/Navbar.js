import React, { Component } from 'react'
import { Link } from 'react-router';
import './style.scss';

export default class Navbar extends Component {
    _logout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const { isLogin, progress } = this.props;
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">Transaction Work</Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            {isLogin ? <li><Link to="/transaction" activeClassName="active" disabled={progress}>Transaction</Link></li> : null}
                            {isLogin ? <li><Link to="/table" activeClassName="active" disabled={progress}>Table</Link></li> : null}
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {isLogin ? (
                                <li>
                                    <a className="link--local" onClick={this._logout.bind(this)} disabled={progress}>
                                        <i className="fa fa-sign-out" aria-hidden="true"></i> Выход
                                    </a>
                                </li>
                            ) : null}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
