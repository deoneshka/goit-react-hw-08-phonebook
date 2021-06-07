import React, { Component, Suspense, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from './Components/Container';
import routes from './routes';
import AppBar from './Components/AppBar';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

class App extends Component {
    componentDidMount() {
        this.props.onGetCurrentUser();
    };

    render() {
        return (
            <Container>
                <AppBar />
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        <PublicRoute exact path={routes.home} component={HomeView} />
                        <PublicRoute
                            path={routes.register}
                            restricted
                            redirectTo={routes.contacts}
                            component={RegisterView}
                        />
                        <PublicRoute
                            path={routes.login}
                            restricted
                            redirectTo={routes.contacts}
                            component={LoginView}
                        />
                        <PrivateRoute
                            path={routes.contacts}
                            redirectTo={routes.login}
                            component={ContactsView}
                        />
                        <Redirect to={routes.home} />
                    </Switch>
                </Suspense>
            </Container>
        );
    };
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);