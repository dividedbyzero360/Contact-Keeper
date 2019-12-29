import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext'

const ContactForm = () => {

    const contactContext = useContext(ContactContext);
    const [contact, setContact] = useState({
        name: '',
        type: 'personal',
        email: '',
        phone: ''
    });
    const { name, email, phone, type } = contact;
    const onchange = e => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    }

    const onsubmit = (e) => {
        e.preventDefault();
        contactContext.addContact(contact);
        setContact({
            name: '',
            type: 'personal',
            email: '',
            phone: ''
        });
    }
    return (
        <form onSubmit={onsubmit}>
            <h2 className='text-primary'>Add Contact</h2>
            <input
                type='text'
                placeholder='name'
                name='name'
                value={name}
                onChange={onchange}
            />
            <input
                type='text'
                placeholder='Email'
                name='email'
                value={email}
                onChange={onchange}
            />
            <input
                type='text'
                placeholder='Phone'
                name='phone'
                value={phone}
                onChange={onchange}
            />
            <h5>Contact Type</h5>
            <input type='radio' name='type'
                value='personal' checked={type === 'personal'} onChange={onchange} />{' '}Personal {' '}
            <input type='radio' name='type'
                value='professional' checked={type === 'professional'} onChange={onchange} />{' '}Professional {' '}
            <div>
                <input type="submit" value="Add Contact" className="btn btn-primary btn-block" />
            </div>
        </form>
    );
}

export default ContactForm;