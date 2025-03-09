import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { nanoid } from 'nanoid'

  const ContactSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Must be min 3 chars').max(50).required('This field is required'),
       number: Yup.string().matches(/^\+?\d{7,}$/, 'Must be at least 7 digits').required('This field is required')
        
    });

export default function ContactForm({ contacts,setContacts }) { 
  
    const idName = useId();
    const idNumber = useId();
    return (
        <Formik initialValues={{
        name: '',
        number: ''
        }}
            
        validationSchema={ContactSchema}
        
        onSubmit={(values, actions) => { 
            const newContact = {
            id: nanoid(), ...values};
            setContacts(prevContacts => [...prevContacts,newContact]);
            actions.resetForm();
    }}>
            <Form className={css.form}>
                <div className={css.container}>
                    <label htmlFor={idName} >Name</label>
                    <Field className={css.input} type='text' name='name' id={idName} />
                    <ErrorMessage name='name' component='div'/>
                </div>
                <div className={css.container}>
                    <label htmlFor={idNumber}>Number</label>
                    <Field className={css.input}  type='text' name='number' id={idNumber} />
                     <ErrorMessage name='number' component='div'/>
                    </div>
                <button className={css.button} type='submit'>Add contact</button>
            </Form>
        </Formik>
    );
};