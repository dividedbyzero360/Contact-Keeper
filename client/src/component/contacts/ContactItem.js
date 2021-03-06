import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {

    const { id, name, email, phone, type } = contact;
    const contactContext = useContext(ContactContext);

    const ondelete=(e)=>{
        contactContext.deleteContact(id);
        contactContext.clearContact();
    }

    const onedit=()=>{
        contactContext.selectContact(contact);
    }

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name}{' '}
                <span
                    style={{ float: 'right' }}
                    className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className='list'>
                {email && (<li>
                    <i className="fas fa-envelope-open">
                        {email}
                    </i>
                </li>)}
                {phone && (<li>
                    <i className="fas fa-phone">
                        {phone}
                    </i>
                </li>)}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm" onClick={onedit}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={ondelete}>Delete</button>
            </p>
        </div>)

}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
}

export default ContactItem;