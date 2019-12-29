import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext'
import ContactReducer from './contactReducer';

import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from '../types';


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

        ]
    }
    const addContact=(contact)=>{
        contact.id=uuid.v4();
        dispatch({
            type:ADD_CONTACT,
            payload:contact
        })
    }
    const deleteContact=(id)=>{
        dispatch({
            type:DELETE_CONTACT,
            payload:id
        })
    }

    const [state, dispatch] = useReducer(ContactReducer, intialState);
    return <ContactContext.Provider
        value={{
            contacts: state.contacts,
            addContact,
            deleteContact
        }}
    >
        {props.children}
    </ContactContext.Provider>
}

export default ContactState;