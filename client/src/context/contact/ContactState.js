import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext'
import ContactReducer from './contactReducer';

import { ADD_CONTACT, DELETE_CONTACT, SELECT_CONTACT, CLEAR_CONTACT, UPDATE_CONTACT, FILTER_CONTACT, CLEAR_FILTER } from '../types';


const ContactState = (props) => {
    const intialState = {
        contacts: [
            {
                name: 'wastabir',
                type: 'personal',
                phone: '514-998-8714',
                email: 'wastabir.alam@gmail.com',
                id: '1'

            },
            {
                name: 'Ractim',
                type: 'personal',
                phone: '514-998-1234',
                email: 'ractim.dutta@gmail.com',
                id: '2'

            }

        ],
        currentContact: null,
        filteredContact: null
    }
    const addContact = (contact) => {
        contact.id = uuid.v4();
        dispatch({
            type: ADD_CONTACT,
            payload: contact
        })
    }
    const deleteContact = (id) => {
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        })
    }

    const selectContact = (contact) => {
        dispatch({
            type: SELECT_CONTACT,
            payload: contact
        });
    }

    const clearContact = () => {
        dispatch({
            type: CLEAR_CONTACT
        });
    }

    const updateContact = (contact) => {
        dispatch({
            type: UPDATE_CONTACT,
            payload: contact
        });
    }

    const filterContact = (text) => {
        dispatch({
            type: FILTER_CONTACT,
            payload: text
        });
    }

    const clearFilter = () => {
        dispatch({
            type: CLEAR_FILTER
        });
    }

    const [state, dispatch] = useReducer(ContactReducer, intialState);
    return <ContactContext.Provider
        value={{
            contacts: state.contacts,
            currentContact: state.currentContact,
            filteredContact: state.filteredContact,
            addContact,
            deleteContact,
            selectContact,
            clearContact,
            updateContact,
            filterContact,
            clearFilter
        }}
    >
        {props.children}
    </ContactContext.Provider>
}

export default ContactState;