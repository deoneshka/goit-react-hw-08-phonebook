import { connect } from 'react-redux';
import MainNav from './MainNav';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import Container from '../Container';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import styles from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <Container>
      <div className={styles.wrapper}>
        <MainNav />
        {
          isAuthenticated
            ? < UserMenu />
            : <AuthNav />
        }
      </div>
    </Container>
  </header>
);

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
})

export default connect(mapStateToProps)(AppBar);