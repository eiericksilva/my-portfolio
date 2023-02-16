import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  pointer-events: none;

  background-color: rgb(10 10 18 / 98%);

  svg {
    cursor: pointer;
    position: absolute;
    top: 1.4rem;
    right: 5.9rem;
    z-index: 20;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;
