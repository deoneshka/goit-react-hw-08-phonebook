import axios from 'axios';
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from './contacts-actions';

const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());

    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactsSuccess(data));
    } catch (error) {
        dispatch(fetchContactsError(error.message));
    };
};

const addContact = (name, number) => async dispatch => {
    const contact = {
        name,
        number
    };

    dispatch(addContactRequest());

    try {
        const { data } = await axios.post('/contacts', contact);
        dispatch(addContactSuccess(data));
    } catch (error) {
        dispatch(addContactError(error.message));
    };
};

const deleteContact = id => async dispatch => {
    dispatch(deleteContactRequest());

    try {
        await axios.delete(`/contacts/${id}`);
        dispatch(deleteContactSuccess(id))
    } catch (error) {
        dispatch(deleteContactError(error.message))
    };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    addContact,
    deleteContact,
    fetchContacts
}