import * as H from "./styles";
import { Button } from "../Button";
import react from "../../assets/images/react.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  return (
    <>
      <H.Wrapper id="Inicio">
        <H.ContainerMenu>
          <H.Logo className="logo"> &lt; Erick Silva /&gt; </H.Logo>
          <AiOutlineMenu size={40} />
          <H.Menu
            className="menu"
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          >
            <H.Item>
              <H.Link href="#Inicio">INÍCIO</H.Link>
            </H.Item>
            <H.Item>
              <H.Link href="#SobreMim">SOBRE MIM</H.Link>
            </H.Item>
            <H.Item>
              <H.Link href="#Projetos">PORTFÓLIO</H.Link>
            </H.Item>
            <H.Item>
              <H.Link href="#Contatos">CONTATOS</H.Link>
            </H.Item>
            <H.Item>
              <H.Link href="#RedesSociais">REDES SOCIAIS</H.Link>
            </H.Item>
          </H.Menu>
        </H.ContainerMenu>
        <H.Main>
          <H.Subtitle className="main">OLÁ, ME CHAMO ERICK SILVA</H.Subtitle>
          <H.Title className="main">DESENVOLVEDOR FRONT-END</H.Title>
          <Button>
            <a href="#Contatos">FALE COMIGO</a>
          </Button>
          <img src={react} alt="Imagem react" />
        </H.Main>
      </H.Wrapper>
    </>
  );
};

export default Header;