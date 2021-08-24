import styled from 'styled-components'

export const ContainerNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  height: 3.5rem;
  max-width: 1280px;
  margin: 0 auto;

  img {
    height: 1.5rem;
    width: auto;
    cursor: pointer;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    a {
      text-decoration: none;
      margin-left: 1rem;
      cursor: pointer;

      &:nth-child(1) {
        margin-left: 0;
      }
    }
  }

  div {
    display: flex;
  }

  @media (max-width: 600px) {
    img {
      height: 1rem;
    }
  }
`