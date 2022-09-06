import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import Image from 'next/image';
import ImgSrc from '../public/filmic-shot2.jpg';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube, IconBrandLinkedin } from '@tabler/icons';
import { ContactBody } from '../styles/ContactStyles';
import IconBox from '../components/iconBox';
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
            <div className='mainText'>
              <h1 className='title'>GET IN TOUCH</h1>
              <div className="boxes">
                <div className='styledBox' id='infoBox'>
                  <div className="icons">
                    <IconBox>
                      <IconBrandInstagram stroke={1.5} size={'32px'} />
                    </IconBox>
                    <IconBox>
                      <IconBrandTwitter stroke={1.5} size={'32px'} />
                    </IconBox>
                    <IconBox>
                      <IconBrandYoutube stroke={1.5} size={'32px'} />
                    </IconBox>
                    <IconBox>
                      <IconBrandLinkedin stroke={1.5} size={'32px'} />
                    </IconBox>
                  </div>
                  <div className='text'>
                    Across the centuries something incredible is waiting to be
                    known tendrils of gossamer clouds finite but unbounded stirred
                    by starlight white dwarf. Brain is the seed of intelligence hundreds
                    of thousands inconspicuous motes of rock and gas bits of moving fluff
                    shores of the.
                  </div>
                </div>
                <div className='styledBox' id='formBox'>
                  <ContactForm />
                </div>
              </div>
            </div>
            <div className='footerIcons'>
              <IconBox>
                <IconBrandInstagram stroke={1.5} size={'32px'} />
              </IconBox>
              <IconBox>
                <IconBrandTwitter stroke={1.5} size={'32px'} />
              </IconBox>
              <IconBox>
                <IconBrandYoutube stroke={1.5} size={'32px'} />
              </IconBox>
              <IconBox>
                <IconBrandLinkedin stroke={1.5} size={'32px'} />
              </IconBox>
            </div>
          </div>
        </div>
      </ContactBody>
    </Layout>
  </div>
);

export default Contact;