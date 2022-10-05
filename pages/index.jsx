import Link from 'next/link';
import { Section } from '../components/section';
import { MainContainer } from '../styles/IndexStyles';

const Home = () => (
  <MainContainer>
    <Section>
      <Link href={'/about'}>
        <div>
          <h1>IÑAKI LAMBRECHTS</h1>
          <p>Portfolio</p>
        </div>
      </Link>
      <footer>
        <p>Director | Photographer</p>
      </footer>
    </Section>
  </MainContainer>
);

export default Home;
