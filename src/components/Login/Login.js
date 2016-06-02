import React, { Component, PropTypes } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        
        this._onSubmit = e => {
            this._submit(e);
        };
    }

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
        const disabled = progress ? 'disabled' : null; 
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-header">
                            <h3>Авторизация</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <div className="well">
                            <form name="auth" className="form-horizontal from--auth" onSubmit={this._onSubmit}>
                                <fieldset>
                                    <div className="form-group">
                                        <label for="inputEmail" className="col-md-2 control-label">Email</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" 
                                                disabled={disabled}
                                                defaultValue={email} id="email" name="email" 
                                                placeholder="Email" required autocomplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputPassword" className="col-md-2 control-label">Пароль</label>
                                        <div className="col-md-10">
                                            <input type="password" className="form-control" 
                                                disabled={disabled}
                                                defaultValue={password} id="password" name="password" 
                                                required placeholder="Password" autocomplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-10 col-md-offset-2">
                                            <button type="submit" className="btn btn-primary" disabled={disabled}>
                                                {progress ? <i className="fa fa-lg fa-spinner fa-spin"></i> : null} Войти
                                            </button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    progress: PropTypes.bool
};
