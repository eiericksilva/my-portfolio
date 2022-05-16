import * as H from "./styles"
import React from 'react'

const Header = () => {
  return (
    <>
        <H.Wrapper id="Inicio">
            <H.ContainerMenu>
              <H.Logo className="logo"> &lt;ERICK SILVA/&gt;
              </H.Logo>
              <H.Menu>
                <H.Item> <H.Link href="#Inicio">INÍCIO</H.Link></H.Item>
                <H.Item> <H.Link href="#SobreMim">SOBRE MIM</H.Link></H.Item>
                <H.Item> <H.Link href="#Projetos">PORTFOLIO</H.Link></H.Item>
                <H.Item> <H.Link href="#Contatos">CONTATOS</H.Link></H.Item>
                <H.Item> <H.Link href="#RedesSociais">REDES SOCIAIS</H.Link></H.Item>
              </H.Menu>
            </H.ContainerMenu>
            <H.Main>
                <H.Subtitle className="main">EU ME CHAMO ERICK SILVA</H.Subtitle>
                <H.Title className="main">DESENVOLVEDOR FRONT-END</H.Title>
                <H.Button>
                  <a href="#Contatos">
                    FALE COMIGO
                  </a>
                </H.Button>
            </H.Main>
        </H.Wrapper>
    </>
  )
}

export default Header;


