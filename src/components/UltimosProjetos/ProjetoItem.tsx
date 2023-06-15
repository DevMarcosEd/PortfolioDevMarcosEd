import Link from 'next/dist/client/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjetoContainer } from './styles';

interface ProjetoProps {
  name: string;
  banner: string;
  // type: string;
  // slug: string;
  // img: string;
}

// href={`/projetos/${slug}`}

export default function ProjetoItem({ name, banner }: ProjetoProps) {
  return (
    <ProjetoContainer banner={banner} data-aos="fade-up">
      {/* section vai ser o quabrado com a imagem e o texto */}
      <section>
        {/* div só e utilizada para criar o overlay */}
        <div className="overlay" />
        <div className="text">
          <h1># {name}</h1>
          {/* <h2>- {type}</h2> */}
        </div>
      </section>
      {/* button ao lado */}
      <button type="button">
        <Link href="">
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjetoContainer>
  );
}
