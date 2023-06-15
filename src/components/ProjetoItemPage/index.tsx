// import Link from 'next/link';
import { Container } from './styles';

interface ProjetoItemProps {
  name: string;
  description: string;
  bannerprojetos: string;
}

export function ProjetoItemPage({
  name,
  description,
  bannerprojetos
}: ProjetoItemProps) {
  return (
    <Container bannerprojetos={bannerprojetos}>
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
