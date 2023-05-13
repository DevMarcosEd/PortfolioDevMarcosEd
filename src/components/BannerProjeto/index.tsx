import { Container } from './styles';

interface BannerProjetoProps {
  title: string;
  type: string;
  imgUrl: string;
}

export default function BannerProjeto({
  title,
  type,
  imgUrl
}: BannerProjetoProps) {
  return (
    <Container imgUrl={imgUrl}>
      <div className="overlay" />

      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Container>
  );
}
