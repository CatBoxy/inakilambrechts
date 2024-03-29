import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, InputWrapper } from '../styles/ContactFormStyles';
import { IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';


const ContactForm = () => {

  const required = '* Required field';

  const initialValues = {
    message: '',
    name: '',
    email: '',
  };

  const validationSchema = () =>
    Yup.object().shape({
      message: Yup.string().min(6, 'Minimum required characters: 6').required(required),
      name: Yup.string().required(required),
      email: Yup.string().email('Must be valid Email').required('* Must be a valid Email'),
    });

  const onSubmit = () => {
    let message = {
      message: {
        message: values.message,
        name: values.name,
        email: values.email,
      }
    }
    console.log(message);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
      }
    })
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, errors, touched, handleBlur, values } = formik;

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <div className='inputsBox'>
            <InputWrapper>
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name && touched.name ? 'error' : ''}
              />
              {errors.name && touched.name && (
                <span className='error-message'>{errors.name}</span>
              )}
            </InputWrapper>
            <InputWrapper>
              <input
                name="email"
                type="text"
                placeholder="Mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? 'error' : ''}
              />
              {errors.email && touched.email && (
                <span className='error-message'>{errors.email}</span>
              )}
            </InputWrapper>
            <InputWrapper>
              <textarea
                name="message"
                placeholder="Message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.message && touched.message ? 'error' : ''}
              />
              {errors.message && touched.message && (
                <span className='error-message'>{errors.message}</span>
              )}
            </InputWrapper>
          </div>
          <div className="buttonContainer">
            <button type="submit">SEND</button>
          </div>
          <div className="iconsContainer">
            <a href="https://www.youtube.com/c/HelderlandPictures" target="_blank" rel="noreferrer">
              <IconBrandYoutube stroke={1.5} size={'32px'} />
            </a>
            <a href="https://vero.co/ilamb_" target="_blank" rel="noreferrer">
              <img
                src="/VERO_Icon_Regular_White.svg"
                quality='100'
                height={32}
                width={32}
                alt=''
              />
            </a>
            <a href="https://instagram.com/ilambb_?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
              <IconBrandInstagram stroke={1.5} size={'32px'} />
            </a>
          </div>
        </form>
      </Container>
    </>
  );
};

export default ContactForm;