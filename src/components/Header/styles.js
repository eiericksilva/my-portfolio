import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-width: 1170px;
  height: 713px;
  background-color: #0a0a12;
`;

export const ContainerMenu = styled.div`
  width: 100%;
  min-width: 1170px;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ffd1aa;

  svg {
    display: none;
  }

  @media (max-width: 900px) {
    > .menu {
      display: none;
    }

    svg {
      display: block;
    }
  }
`;

export const Logo = styled.h3`
  font-family: "Great Vibes", cursive;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.5em;

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;
export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: auto;
  height: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  padding: 10px;
  color: white;
  list-style: none;
`;

export const Link = styled.a`
  text-decoration: none;
  background-color: transparent;
  color: white;
  font-size: 1em;
  font-weight: 300;
  padding: 10px 20px;

  &:hover {
    cursor: pointer;
    background-color: #ffd1aa;
    color: #000000;
    transition: 0.3s;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 150px 70px;
  margin: 100px 0;
  position: relative;

  img {
    position: absolute;
    opacity: 10%;
    right: 50px;
    top: -100px;
    width: 600px;
    height: 600px;
    pointer-events: none;

    @media (max-width: 768px) {
      width: 500px;
      height: 500px;
      right: 50px;
      top: -30px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  @media (max-width: 768px) {
    font-size: 1.2rem;
    letter-spacing: 4px;
  }
`;

export const Subtitle = styled.h2`
  @media (max-width: 768px) {
    font-size: 0.6rem;
    letter-spacing: 6px;
  }
`;