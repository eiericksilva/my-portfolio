import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 20px auto;
  height: auto;
  padding: 70px;
  background-color: rgb(10, 10, 18);
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  p {
    font-size: 1.2rem;
    color: pink;
  }
  h1 {
    font-size: 2rem;
    margin: 5px 0;
  }
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 10px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    h2 {
    }
    ul {
      padding-bottom: 10px;
      li {
        list-style: none;
        &::before {
          content: "🔥";
          margin-right: 10px;
        }
      }
    }
  }
`;
