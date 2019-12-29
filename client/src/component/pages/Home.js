import React from 'react';
import ContactState from '../../context/contact/ContactState';
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'


const Home = () => {
    return (
        <ContactState>
            <div className="grid-2">
                <div>
                    <ContactForm />
                </div>
                <div>
                    <Contacts />
                </div>
            </div>
        </ContactState>
    );
}

export default Home;