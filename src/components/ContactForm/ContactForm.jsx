import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { nanoid } from 'nanoid'

export default function ContactForm({contacts}) { 
    const idName = useId();
    const idNumber = useId();
    return (
        <Formik initialValues={{
        id: '',
        name: '',
        number: ''
        }} onSubmit={(values, actions) => { 
           contacts.push(values);
            actions.resetForm();
    }}>
            <Form>
                <div>
                    <label htmlFor={idName} >Name</label>
                    <Field type='text' name='name' id={idName} />
                </div>
                <div>
                    <label htmlFor={idNumber}>Number</label>
                    <Field type='text' name='number' id={idNumber} />
                    </div>
                <button type='submit'>Add contact</button>
            </Form>
        </Formik>
    );
};