import { useEffect, useState } from 'react';
import axios from 'axios';

import Link from 'next/dist/client/link';
import { Container } from './styles';

import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';

interface ProjetoProps {
  name: string;
  banner: string;
  // type: string;
  // slug: string;
  // img: string;
}

function UltimosProjetos() {
  const [projects, setProjects] = useState<ProjetoProps[]>([]);

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/DevMarcosEd/repos`,
          { params: { per_page: 4 } }
        );

        setProjects(response.data);
        // eslint-disable-next-line no-console
        console.log(response);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    fetchProjetos();
  }, []);

  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />

      <section>
        {projects.slice(0, 4).map(project => (
          <ProjetoItem
            key={project.name}
            name={project.name}
            banner={`https://raw.githubusercontent.com/DevMarcosEd/${project.name}/main/banner/${project.name}.png`}
          />
        ))}
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
