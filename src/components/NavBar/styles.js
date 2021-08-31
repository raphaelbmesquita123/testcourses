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
  padding:  1.5rem 1rem;
  color: var(--blue-500);
  color: ${props => props.color};
  border-bottom: ${props => props.marginBottom};
  transition: all 0.2s ease;
  margin-left: 1rem;

  &:nth-child(1) {
    margin-left: 0;
  }

  &:hover{
    color: var(--white);
  }
    
`