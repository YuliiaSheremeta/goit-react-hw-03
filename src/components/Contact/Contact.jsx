import css from './Contact.module.css'

export default function Contact({name,number}) {
    return (
        <div>
            <p>{name}</p>
            <p>{number}</p>
            <button type='button'>Delete</button>
      </div>  
    );
 };