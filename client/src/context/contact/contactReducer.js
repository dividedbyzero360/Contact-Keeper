import { ADD_CONTACT, DELETE_CONTACT, SELECT_CONTACT, CLEAR_CONTACT, UPDATE_CONTACT , FILTER_CONTACT, CLEAR_FILTER} from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts].filter(contact => contact.id !== action.payload)
            };
        case SELECT_CONTACT:
            return {
                ...state,
                currentContact: action.payload
            };
        case CLEAR_CONTACT:
            return {
                ...state,
                currentContact: null
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact=> {
                    if(contact.id===action.payload.id)
                    {
                        contact=action.payload;
                    }
                    return contact;
                }),
            }
        case FILTER_CONTACT:
            return {
                ...state,
                filteredContact: state.contacts.filter(contact=> {
                    const regex=new RegExp(`${action.payload}`,'gi');
                    return contact.name.match(regex) || contact.email.match(regex);
                })
            }
        case CLEAR_FILTER:
            return{
                ...state,
                filteredContact:null
            }        
        default:
            return state;
    }
}