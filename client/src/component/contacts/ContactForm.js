import React, { useState, useContext, useEffect, Fragment } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);
    const [contact, setContact] = useState({
        name: '',
        type: 'personal',
        email: '',
        phone: ''
    });
    let { currentContact } = contactContext;
    useEffect(() => {
        if (currentContact != null) {
            setContact(currentContact);

        } else {
            setContact({
                name: '',
                type: 'personal',
                email: '',
                phone: ''
            });
        }
        return function cleanall() {
            //console.log("Clean all");
        };
    }, [contactContext]);
    const { name, email, phone, type } = contact;
    const onchange = e => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    }

    const onsubmit = (e) => {
        e.preventDefault();
        if (currentContact == null) {
            contactContext.addContact(contact);
        } else {
            contactContext.updateContact(contact);
        }
        clearAll();
    }
    const clearAll = () => {
        contactContext.clearContact();
    }
    return (
        <Fragment>
            <form onSubmit={onsubmit}>
                <h2 className='text-primary'>{currentContact ? 'Edit Contact' : 'Add Contact'}</h2>
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
                    <input type="submit" value={currentContact ? "Update Contact" : "Add Contact"} className="btn btn-primary btn-block" />
                </div>
            </form>
            {currentContact && (<div>
                <button className="btn bt-light btn-block" onClick={clearAll}>Clear All</button>
            </div>)}
        </Fragment>
    );
}

export default ContactForm;