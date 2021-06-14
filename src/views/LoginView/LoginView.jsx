import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import authOperations from '../../redux/auth/auth-operations';
import styles from './LoginView.module.css';
import Box from '@material-ui/core/Box';


class LoginView extends Component {
    state = {
        email: '',
        password: '',
        showPassword: false
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onLogin(this.state);
        this.setState({ email: '', password: '' });
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    render() {
        const { email, password, showPassword } = this.state;

        return (
            <div className={styles.wrapper}>
                <form
                    className={styles.form}
                    onSubmit={this.handleSubmit}
                    autoComplete="off"
                >

                    <Box className={styles.wrapper__input}>
                        <TextField
                            className={styles.input}
                            label="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            variant="outlined"
                        />
                    </Box>

                    <Box className={styles.wrapper__input}>
                        <FormControl variant="outlined" className={styles.input}>
                            <InputLabel htmlFor="outlined-adornment-password">password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            onMouseDown={this.handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {
                                                showPassword ? <Visibility /> : <VisibilityOff />
                                            }
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                    </Box>

                    <Button className={styles.button} type="submit" variant="contained" color="primary">enter</Button>
                </form>
            </div>
        );
    };
};

const mapDispatchToProps = {
    onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);