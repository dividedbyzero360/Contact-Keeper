import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
    const contactContext = useContext(ContactContext);
    const {filteredContact,contacts}= contactContext;
    useEffect(() => {
        if (contactContext.filteredContact == null) {
            text.current.value = "";
        } 
    }, [filteredContact])

    useEffect(() => {
        if (text.current.value !== '') {
            contactContext.filterContact(text.current.value);
        }
    }, [contacts])

    const text = useRef('');
    const onChange = (e) => {
        if (text.current.value !== '') {
            contactContext.filterContact(e.target.value);
        } else {
            contactContext.clearFilter();
        }
    }
    return (
        <form>
            <input ref={text} type="text" placeholder="Filter contacts" onChange={onChange} />
        </form>
    );
}

export default ContactFilter;