import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        const { login } = this.props;
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
                        <a className="navbar-brand" href="#home">Transaction Work</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><a>Transaction</a></li>
                            <li><a>Table</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {login ? <li><a>Выйти</a></li> : <li><a>Войти</a></li>}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}