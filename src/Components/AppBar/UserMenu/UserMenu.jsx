import { connect } from 'react-redux';
import { getUserEmail } from '../../../redux/auth/auth-selectors';
import authOperations from '../../../redux/auth/auth-operations';

const UserMenu = ({ email, onLogOut }) => (
    <div>
        <p>{email}</p>
        <button type='button' onClick={onLogOut}>log out</button>
    </div>
);

const mapStateToProps = (state) => ({
    email: getUserEmail(state)
});

const mapDispatchToProps = {
    onLogOut: authOperations.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);