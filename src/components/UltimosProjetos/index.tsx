import Link from 'next/dist/client/link';
import { Container } from './styles';

import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';

function UltimosProjetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />

      <section>
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          img="https://images.alphacoders.com/748/748038.png"
        />
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          img="https://images3.alphacoders.com/125/1252095.jpg"
        />
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          img="https://images.alphacoders.com/122/1224908.jpg"
        />
      </section>

      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default UltimosProjetos;
