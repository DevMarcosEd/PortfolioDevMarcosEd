import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { HomeContainer } from '../styles/HomeStyles';

import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import UltimosProjetos from '../components/UltimosProjetos';
import Conhecimentos from '../components/Conhecimentos';
import Footer from '../components/Footer';
import LogoWpp from '../components/WppButton';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      {/* Componente "navbar" */}
      <Header />

      <main className="container">
        <HomeHero />
        <Experiencias />
        <UltimosProjetos />
        <Conhecimentos />
      </main>
      <LogoWpp />
      <Footer />
    </HomeContainer>
  );
}
