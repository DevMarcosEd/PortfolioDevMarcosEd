import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Experiencias() {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    // Verifica o tamanho da tela ao montar o componente
    const isMobile = window.innerWidth < 768;

    // Se for mobile, desabilita o slider
    if (isMobile) {
      return;
    }

    // Se não for mobile, ativa o slider com as configurações
    const slider = sliderRef.current;
    if (slider) {
      slider.slickNext();
    }

    // Retorna a função para desmontar o componente
    // eslint-disable-next-line consistent-return
    return () => {
      if (slider) {
        slider.slickPrev();
      }
    };
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Container>
      <SectionTitle
        title="Principais Cursos"
        description="para adquirir experiência"
      />

      <section>
        <Slider {...settings}>
          <ExperienciaItem
            year="2021"
            title="JavaScript do Básico ao Avançado"
            description=" tudo sobre JavaScript(ES6+), lógica de prog., orientação a objetos, crie projetos para web com Node.js e Express"
          />
          <ExperienciaItem
            year="2021"
            title="Desenvolvimento Web Completo 2023"
            description="Tecnologias abordadas: HTML5, CSS3, BootStrap 5, Java Script, ES6 (JavaScript Moderno)"
          />
          <ExperienciaItem
            year="2022"
            title="Formação Node Js"
            description="desenvolvimento web com Javascript para o back-end, com bibliotecas como Express.js, e bancos de dados como MongoDB e MySQL."
          />
          <ExperienciaItem
            year="2023"
            title="Fabrica de Aplicativos"
            description="Desenvolvimento web utilizando React Js"
          />
        </Slider>
      </section>
    </Container>
  );
}

export default Experiencias;
