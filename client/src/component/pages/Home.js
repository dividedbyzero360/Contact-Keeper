import React from 'react';
import ContactState from '../../context/contact/ContactState';
import AuthState from '../../context/auth/AuthState';
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../contacts/ContactFilter'


const Home = () => {
    return (
        <AuthState>
            <ContactState>
                <div className="grid-2">
                    <div>
                        <ContactForm />
                    </div>
                    <div>
                        <ContactFilter />
                        <Contacts />
                    </div>
                </div>
            </ContactState>
        </AuthState>
    );
}

export default Home;