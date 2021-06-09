import { connect } from 'react-redux';
import { getUserEmail } from '../../../redux/auth/auth-selectors';
import authOperations from '../../../redux/auth/auth-operations';
import Button from '@material-ui/core/Button';
import styles from './UserMenu.module.css';

const UserMenu = ({ email, onLogOut }) => (
    <div className={styles.wrapper}>
        <p className={styles.text}>{email}</p>
        <Button
            className={styles.button}
            type="button"
            onClick={onLogOut}
            variant="contained"
            color="secondary">log out</Button>
    </div>
);

const mapStateToProps = (state) => ({
    email: getUserEmail(state)
});

const mapDispatchToProps = {
    onLogOut: authOperations.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);