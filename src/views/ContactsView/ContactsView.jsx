import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { getLoading } from '../../redux/contacts/contacts-selectors';
import ContactForm from '../../Components/ContactForm';
import ContactList from '../../Components/ContactList';
import FilterContacts from '../../Components/FilterContacts';
import styles from './ContactsView.module.css';

class ContactsView extends Component {
    componentDidMount() {
        this.props.fetchContacts()
    };

    render() {
        return (
            <>
                <h2 className={styles.main_title}>phonebook</h2>
                <ContactForm />
                <h3 className={styles.secondary_title}>contacts</h3>
                <FilterContacts />
                {
                    this.props.isLoading && <h3 className={styles.loader}>loading...</h3>
                }
                <ContactList />
            </>
        )
    };
};

const mapStateToProps = state => ({
    isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);