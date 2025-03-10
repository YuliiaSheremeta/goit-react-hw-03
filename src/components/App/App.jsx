import { useState, useEffect } from 'react'

import css from '../App/App.module.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'

export default function App() {
 
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    };
    return ([
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);
      
  });

  const [filterValue, setFilterValue] = useState('');
   
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterSearch = (searchValue) => {
    setFilterValue(searchValue);
  };

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()));

   const handleRemoveContact = (contactId) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };
 
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm contacts={contacts } setContacts={setContacts} />
      <SearchBox value={filterValue} onChange={handleFilterSearch}  />
      <ContactList contacts={filteredContacts}  onRemoveContact={handleRemoveContact} />
    </>
  )
};

