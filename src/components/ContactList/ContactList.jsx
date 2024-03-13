import React from 'react';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors';
import { removeContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className={styles.contactListUl}>
        {contacts.map(contact => (
          <li className={styles.contactListLi} key={contact.id}>
            {`${contact.name} : ${contact.number}`}
            {
              <button
                className={styles.button}
                type="button"
                name="delete"
                onClick={() => {
                  dispatch(removeContact(contact));
                }}
              >
                delete
              </button>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
