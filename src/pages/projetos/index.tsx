import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import { ProjetoItemPage } from '../../components/ProjetoItemPage';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

interface Project {
  name: string;
  description: string;
}

function projetos() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/DevMarcosEd/repos`
        );
        setProjects(response.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    fetchProjetos();
  });

  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        {projects.map(project => (
          <ProjetoItemPage
            key={project.name}
            name={project.name}
            description={project.description}
          />
        ))}
      </main>
    </ProjetosContainer>
  );
}

export default projetos;
