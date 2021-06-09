import React from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import Button from '@material-ui/core/Button';
import styles from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={styles.list}>
            {
                contacts.map(({ id, name, number }) =>
                    <li className={styles.item} key={id}>{name}: {number}
                        <Button
                            className={styles.button}
                            type="button"
                            onClick={() => onDeleteContact(id)}
                            variant="contained"
                            color="primary">Delete</Button>
                    </li>
                )
            }
        </ul>
    )
};

const mapStateToProps = (state) => ({
    contacts: getVisibleContacts(state)
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(contactsOperations.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);