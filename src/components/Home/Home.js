import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-header">
                            <h3>Главная</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-unstyled">
                            <li><Link to="/transaction">Работа с транзакциями</Link></li>
                            <li><Link to="/table">Таблица транзакций</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
