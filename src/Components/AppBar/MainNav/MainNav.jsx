import { NavLink } from 'react-router-dom';
import routes from '../../../routes';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../../redux/auth/auth-selectors';

const MainNav = ({ isAuthenticated }) => (
    <nav>
        <NavLink to={routes.home}>home</NavLink>
        {
            isAuthenticated &&
            (
                < NavLink to={routes.contacts}>contacts</NavLink>
            )
        }
    </nav>
);

const mapStateToProps = state => ({
    isAuthenticated:getIsAuthenticated(state)
})

export default connect(mapStateToProps)(MainNav);