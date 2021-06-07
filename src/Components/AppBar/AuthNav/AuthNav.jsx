import { NavLink } from 'react-router-dom';
import routes from '../../../routes';

const AuthNav = () => (
    <nav>
        <NavLink to={routes.register}>registration</NavLink>
        <NavLink to={routes.login}>log in</NavLink>
    </nav>
);

export default AuthNav;