import css from './Contact.module.css'

export default function Contact({name,number}) {
    return (
       <div className={css.container}>
        <div className={css.adress}>
            <p>{name}</p>
                <p>{number}</p>
            </div>
            <button className={css.button} type='button'>Delete</button>
      </div>  
    );
 };