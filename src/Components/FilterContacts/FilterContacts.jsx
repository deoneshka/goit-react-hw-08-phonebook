import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import TextField from '@material-ui/core/TextField';
import styles from './FilterContacts.module.css'

const FilterContacts = ({ value, onChange }) => (
  <div className={styles.wrapper}>
    <TextField label='find contacts by name' className={styles.input} type="text" value={value} onChange={onChange} />
  </div>
  
);

const mapStateToProps = (state) => ({
    value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(changeFilter(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts);