import { connect } from 'react-redux';
import MainNav from './MainNav';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const AppBar = ({ isAuthenticated }) => (
  <header>
    <MainNav />
    {
      isAuthenticated
        ? < UserMenu />
        : <AuthNav />
    }
  </header>
);

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
})

export default connect(mapStateToProps)(AppBar);