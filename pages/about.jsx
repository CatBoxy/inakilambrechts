import Header from '../components/header';
import { AboutBody } from '../styles/AboutStyles';
import Image from 'next/image';
import ImgSrc from '../public/filmic-shot1.jpg';
import Layout from '../components/layout';
import IconBox from '../components/iconBox';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube, IconBrandLinkedin } from '@tabler/icons';

const About = () => (
  <div style={{ backgroundColor: 'black' }}>
    <Layout height='88px' sticky={true}>
      <Header />
    </Layout>
    <Layout padding='0'>
      <AboutBody>
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

              {/* <h1 className='title'>ABOUT IÑAKI</h1> */}
              <div className='styledBox'>
                <p>
                  Hey. Welcome. My name is Iñaki.
                  I'm a Photographer and Aspiring Film Director from Argentina.
                  I'm currently based in Wellington, New Zealand.
                  I've made a few short films and am trying to find my way into the Storytelling Industry.
                </p>
                <p>
                  I have a deep love for Science Fiction and Fantasy related content, such as novels, movies, and podcasts.
                  My biggest influences are absolute masters of the craft.
                  Denis Villeneuve, Roger Deakins, Robert Eggers, J.R.R Tolkien, Hans Zimmer, just to name a few. 
                </p>
                <p>
                  There is nothing I enjoy more than working with a team of creatives with one objective in mind that does their absolute best to accomplish it.
                  And honestly, I feel more than capable of leading one.
                  I would never discard an idea without discussing it before.
                  I value respect and companionship above everything else.
                  And I believe that for great results, dedication and patience are essential. 
                </p>
                <p>
                  Feel free to contact me, let's work together.
                </p>
              </div>

            {/* <div className='footerIcons'>
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
            </div> */}
          </div>
        </div>
      </AboutBody>
    </Layout>
  </div>
);

export default About;