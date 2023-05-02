import Header from '../components/header';
import { AboutBody } from '../styles/AboutStyles';
import Image from 'next/image';
import ImgSrc from '../public/filmic-shot1.jpg';
import Layout from '../components/layout';
import Link from 'next/link';

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
                Hey. Welcome. My name is Iñaki. I'm an aspiring cinematographer from Argentina. I'm currently based in Wellington, New Zealand. I've been shooting indie short films for 3 years and am trying to find my way into the Storytelling Industry.
              </p>
              <p>
                I have a deep love for Science Fiction, Fantasy and Drama. There’s nothing like innovative world-building and truthful characters. But in the end, it’s always about telling a good story. My biggest influences are absolute masters of the craft. Denis Villeneuve, Roger Deakins, Robert Eggers, J.R.R Tolkien, Hans Zimmer, just to name a few.
              </p>
              <p>
                There is nothing I enjoy more than working with a team of creatives with one objective in mind, doing their absolute best to accomplish it. I value respect and companionship above everything else. I would never discard an idea without discussing it before. And I believe that for great results, dedication and patience are essential.
              </p>
              <Link href={"/contact"}>
                <p className='contactLink'>
                  Feel free to contact me, let's work together.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </AboutBody>
    </Layout>
  </div>
);

export default About;