import css from './ContactList.module.css'
import Contact from '../Contact/Contact'

export default function ContactList({contacts,onRemoveContact}) {
    return (
        <ul className={css.contactList}>
            {contacts.map(contact => (
            <li className={css.contactItem} key={contact.id}>
                    <Contact 
                        name={contact.name}
                        number={contact.number}
                    onRemove={() => onRemoveContact(contact.id)}/>
            </li>
        ))}
           
            </ul>
    );
 };
