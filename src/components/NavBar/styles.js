import styled from 'styled-components'

export const ContainerNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  height: 4.5rem;
  margin: 0 auto;
  background-color: var(--blue-900);

  img {
    height: 1.3rem;
    width: auto;
    cursor: pointer;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
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

export const MenuButton = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 1.5rem 1rem;
  color: var(--blue-500);
  color: ${(props) => props.color};
  border-bottom: ${(props) => props.marginBottom};
  transition: all 0.2s ease;
  margin-left: 1rem;

  &:nth-child(1) {
    margin-left: 0;
  }

  &:hover {
    color: var(--white);
  }
`

export const LogoutContainer = styled.main`
  display: ${(props) => props.display};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  background-color: var(--blue-900);
  height: 20rem;
  top: 4.5rem;
  box-shadow: -5px 5px 50px black;
  z-index: 3;
  padding: 2rem;
  div {
    flex-direction: column;
    h1 {
      font-size: 3rem;
      text-align: center;
      color: var(--gray);
    }
    h3 {
      text-align: center;
      margin-top: 1rem;
      color: var(--blue-50);
      font-weight: normal;
      font-size: 0.8rem;
      span{
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--gray);
      }
    }
  }
  
  button {
    margin-top: 2rem;
    padding: 1rem 4rem;
    background: var(--blue-50);
    border-radius: 1rem;
    border: none;
    font-size: 4rem;
    font-weight: bold;
    color: var(--blue-900);
    
    &:hover{
      filter: brightness(0.9);
    }

    &:active{
      transform: scale(0.98);
    }
  }
`
