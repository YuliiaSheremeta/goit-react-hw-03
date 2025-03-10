import css from './SearchBox.module.css'
import { useId } from 'react';

export default function SearchBox({value,onChange}) {
    const filterId = useId();
    
    const filterResults = (evt) => {
      onChange(evt.target.value)  
    }

    return (
        <div className={css.container}>
            <label className={css.label} htmlFor={filterId}>Find contacts by name</label>
            <input type="text" id={filterId} value={value} onChange={filterResults}/>  
        </div>
    );
 };