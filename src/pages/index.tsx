import Head from 'next/head';

import heroImage from '../utils/assets/heroes.png';

import LandingLayout from '../components/layouts/LandingLayout';
import Hero from '../components/sections/Hero';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Landing page</title>
      </Head>

      <main>
        <LandingLayout>
          <Hero
            title="Juntos somos mais fortes!"
            subtitle="Nosso produto busca facilitar o contato entre ONGs necessitadas e heróis dispostos a ajudar estas causas."
            image={heroImage}
            ctaLink="/signup"
            ctaText="Seja você um desses heróis!"
            ctaObsText="Nossos serviços são totalmente gratuitos."
          />
        </LandingLayout>
      </main>
    </div>
  );
};

export default Home;
