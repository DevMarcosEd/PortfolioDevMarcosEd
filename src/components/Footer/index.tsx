import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin
} from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineInstagram
            onClick={() =>
              handleRedirect('https://www.instagram.com/lmarcos_ed/')
            }
          />
          <AiOutlineFacebook
            onClick={() =>
              handleRedirect(
                'https://www.facebook.com/profile.php?id=100009285010594'
              )
            }
          />
          <AiOutlineLinkedin
            onClick={() =>
              handleRedirect(
                'https://www.linkedin.com/in/marcos-almeida-651254231/'
              )
            }
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
