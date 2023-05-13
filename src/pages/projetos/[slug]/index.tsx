import Header from '../../../components/Header';
import BannerProjeto from '../../../components/BannerProjeto';

import { ProjetoContainer } from '../../../styles/ProjetoStyles';

export default function projetos() {
  return (
    <ProjetoContainer>
      <Header />
      <BannerProjeto
        title="Projeto 1"
        type="Website"
        imgUrl="https://images.alphacoders.com/748/748038.png"
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          expedita libero. Dolores distinctio voluptates hic ipsum, sunt,
          repellendus ab sint excepturi nulla officia quis maxime?
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}
