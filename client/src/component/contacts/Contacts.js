import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {

    const contactContext = useContext(ContactContext);
    const { contacts, filteredContact } = contactContext;

    if (contacts.length === 0) {
        return (<h4>Please add a contact</h4>);
    }

    return (
        <Fragment>
            <TransitionGroup>
                {filteredContact ? filteredContact.map(contact => (
                    <CSSTransition classNames="item" key={contact.id} timeout={500}>
                        <ContactItem  contact={contact} />
                    </CSSTransition>
                )) : contacts.map(contact => (
                    <CSSTransition classNames="item" key={contact.id} timeout={500}>
                        <ContactItem key={contact.id} contact={contact} />
                    </CSSTransition>
                ))

                }
            </TransitionGroup>
        </Fragment>
    );
}

export default Contacts;