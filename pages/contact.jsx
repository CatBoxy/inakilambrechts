import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import Image from 'next/image';
import ImgSrc from '../public/filmic-shot2.jpg';
import { ContactBody } from '../styles/ContactStyles';
import ContactForm from '../components/contactForm';

const Contact = () => (
  <div style={{ backgroundColor: 'black' }}>
    <Layout height='88px' sticky={true}>
      <Header />
    </Layout>
    <Layout padding='0'>
      <ContactBody>
        <div className='bgWrapper'>
          <Image
            src={ImgSrc}
            layout="fill"
            objectFit="cover"
            placeholder='blur'
            quality='100'
            alt=''
          />
          <div className='content'>
            <div className='styledBox' id='formBox'>
              <ContactForm />
            </div>
          </div>
        </div>
      </ContactBody>
    </Layout>
  </div>
);

export default Contact;