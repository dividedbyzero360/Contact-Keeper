import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                contacts: [...state.contacts, action.payload]
            };
        case DELETE_CONTACT:
            return {
                contacts: [...state.contacts].filter(contact => contact.id !== action.payload)
            }
        default:
            return state;
    }
}