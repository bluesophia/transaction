import React, { Component } from 'react';

export default class Login extends Component {
    _submit(e) {
        e.preventDefault();
        const { email, password } = e.target;
        this.props.login({
            email: email.value,
            password: password.value
        });
    }

    render() {
        const { email, password, progress } = this.props.auth;
        return (
            <div className="row">
                <div className="col-md-offset-3 col-md-6">
                    <div className="well">
                        <form name="auth" className="form-horizontal from--auth" onSubmit={this._submit.bind(this)}>
                            <fieldset>
                                <legend>Авторизация</legend>
                                <div className="form-group">
                                    <label for="inputEmail" className="col-md-2 control-label">Email</label>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control" defaultValue={email} id="email" name="email" placeholder="Email" required autocomplete="off" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="inputPassword" className="col-md-2 control-label">Пароль</label>
                                    <div className="col-md-10">
                                        <input type="password" className="form-control" defaultValue={password} id="password" name="password" required placeholder="Password" autocomplete="off" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-10 col-md-offset-2">
                                        <button type="submit" className="btn btn-primary">
                                            {progress ? <i className="fa fa-lg fa-spinner fa-spin"></i> : null} Войти
                                        </button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}