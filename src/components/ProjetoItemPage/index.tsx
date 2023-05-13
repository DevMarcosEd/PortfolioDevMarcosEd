// import Link from 'next/link';
import { Container } from './styles';

interface ProjetoItemProps {
  name: string;
  description: string;
}

export function ProjetoItemPage({ name, description }: ProjetoItemProps) {
  return (
    <Container>
      <a>
        <div className="overlay" />
        <section>
          <h1>{name}</h1>
          <h2>{description}</h2>
        </section>
      </a>
    </Container>
  );
}
