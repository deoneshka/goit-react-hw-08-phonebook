import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        const { name, number } = this.state;
        const { contacts, onSubmit } = this.props;
        this.setState({ name: '', number: '' });
        
        if (contacts.find(contact => contact.name === name)) {
            alert(`${name} is already in contacts.`);
            return;
        };

        onSubmit(name, number);
    }

    handleChangeName = e => {
        this.setState({ name: e.currentTarget.value });
    };

    handleChangeNumber = e => {
        this.setState({ number: e.currentTarget.value });
    };

    render () {
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <label className={styles.field}>
                    name
                </label>
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={this.state.name}
                    onChange={this.handleChangeName}
                />
                <label className={styles.field}>
                    number
                </label>
                <input
                    className={styles.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={this.state.number}
                    onChange={this.handleChangeNumber}
                />
                <button className={styles.button} type="submit">
                    add contact
                </button>
            </form>
        )
    };
};

const mapStateToProps = state => ({
    contacts: getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (name, number) => dispatch(contactsOperations.addContact(name, number))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);