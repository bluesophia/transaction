import React, { Component } from 'react';
import './style.scss';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="list-unstyled footer__list">
                                <li className="list__item"><a href="https://github.com/vikshv/transaction/">GitHub</a></li>
                            </ul>
                            <p className="footer__base">
                                Based on <a target="_blank" href="http://bootswatch.com/cerulean/" rel="nofollow">Bootswatch</a>.
                                Icons from <a target="_blank" href="http://fortawesome.github.io/Font-Awesome/" rel="nofollow">Font Awesome</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
