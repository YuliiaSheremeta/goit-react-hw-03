import css from './Contact.module.css'
import { ImPhone,ImUser } from "react-icons/im";


export default function Contact({ name, number, onRemove }) {
   
    return (
       <div className={css.container}>
        <div className={css.adress}>
                <p className={css.p}><ImUser className={css.user} /> {name}</p>
                <p  className={css.p}><ImPhone className={css.user}/> {number}</p>
            </div>
            <button className={css.button} type='button' onClick={onRemove} >Delete</button>
      </div>  
    );
 };