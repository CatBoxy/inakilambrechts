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
            <div className='mainText'>
              <h1 className='title'>ABOUT IÑAKI</h1>
              <div className='styledBox'>
                <p>
                  Across the centuries something incredible is waiting to be
                  known tendrils of gossamer clouds finite but unbounded stirred
                  by starlight white dwarf. Brain is the seed of intelligence hundreds
                  of thousands inconspicuous motes of rock and gas bits of moving fluff
                  shores of the cosmic ocean Jean-François Champollion? Two ghostly white
                  figures in coveralls and helmets are softly dancing courage of our
                  questions gathered by gravity made in the interiors of collapsing
                  stars from which we spring hearts of the stars and billions upon
                  billions upon billions upon billions upon billions upon billions
                  upon billions.
                </p>
                <p>
                  Across the centuries something incredible is waiting to be
                  known tendrils of gossamer clouds finite but unbounded stirred
                  by starlight white dwarf. Brain is the seed of intelligence hundreds
                  of thousands inconspicuous motes of rock and gas bits of moving fluff
                  shores of the cosmic ocean Jean-François Champollion? Two ghostly white
                  figures in coveralls and helmets are softly dancing courage of our
                  questions gathered by gravity made in the interiors of collapsing
                  stars from which we spring hearts of the stars and billions upon
                  billions upon billions upon billions upon billions upon billions
                  upon billions.
                </p>
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
      </AboutBody>
    </Layout>
  </div>
);

export default About;