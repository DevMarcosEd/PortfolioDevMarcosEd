import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNode } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';

import { Container } from './styles';

import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="HTML5" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="JavaScript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React JS" icon={<FaReact />} />
        <ConhecimentoItem title="Node JS" icon={<FaNode />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
