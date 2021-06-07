import React from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import styles from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={styles.list}>
            {
                contacts.map(({ id, name, number }) =>
                    <li className={styles.item} key={id}>{name}: {number}
                        <button className={styles.button} type='button' onClick={() => onDeleteContact(id)}>Delete</button>
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