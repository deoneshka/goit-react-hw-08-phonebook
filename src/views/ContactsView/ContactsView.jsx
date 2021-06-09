import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { getLoading } from '../../redux/contacts/contacts-selectors';
import Container from '../../Components/Container';
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
            <div className={styles.wrapper}>
                <Container>
                    <ContactForm />
                    <FilterContacts />
                    {
                        this.props.isLoading && <h3 className={styles.loader}>loading...</h3>
                    }
                    {
                        !this.props.isLoading && <ContactList />
                    }
                </Container>
            </div>
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