/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
// import picture from '../../assets/pessoa.webp';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      {/* <img src={picture} alt="Minha foto" /> */}
      {/* <div> */}
      <TextContainer>
        <h1>Olá</h1>
        <h2>Me chamo Marcos Eduardo</h2>
      </TextContainer>
      <InfosContainer>
        <CodeItem>
          <span className="comment">//Minha apresentação</span>
          <span className="purple">Infos</span> {'\u007B'}
          <div>
            Nome: <span className="blue">Marcos,</span>
          </div>
          <div>
            Sobrenome: <span className="blue">Almeida</span>
          </div>
          {'\u007D'}
        </CodeItem>

        <CodeItem>
          <span className="purple">Cargo</span> {'\u007B'}
          <div>
            Função: <span className="blue">Dev Front-end,</span>
          </div>
          {'\u007D'}
        </CodeItem>
      </InfosContainer>
      {/* </div> */}
    </Container>
  );
}

export default HomeHero;
