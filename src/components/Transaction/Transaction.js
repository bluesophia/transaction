import React, { Component } from 'react';
import './style.scss';

export default class Transaction extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-header">
                            <h3>Добавление транзакции</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form className="form-inline">
                            <div className="form-group">
                                <input type="text" className="form-control" id="sum" placeholder="Введите сумму" required />
                            </div>
                            <div className="form-group">
                                <select className="form-control" id="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Выполнить</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
