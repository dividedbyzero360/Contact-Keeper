import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext'

const ContactFilter = () => {
    const contactContext = useContext(ContactContext);
    useEffect(() => {
        if (contactContext.filteredContact == null) {
            text.current.value = "";
        }
    })
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