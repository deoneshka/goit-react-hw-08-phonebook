import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

class LoginView extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onLogin(this.state);
        this.setState({ email: '', password: '' });
    };

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <h1>log in</h1>
                <form
                    onSubmit={this.handleSubmit}
                    autoComplete="off"
                >

                    <label>email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>

                    <button type="submit">enter</button>
                </form>
            </div>
        );
    };
};

const mapDispatchToProps = {
    onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);