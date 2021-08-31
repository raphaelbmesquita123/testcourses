import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--blue-900);
  padding: 0.8rem;
  text-transform: uppercase;

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    font-weight: normal;
    font-size: 0.8rem;
    max-width: 1080px;
    margin: 0 auto;

    a {
      text-decoration: none;
      color: var(--gray);

      &:hover {
        color: var(--blue-100);
      }
    }

    div {
      a {
        font-size: 1.2rem;
        margin: 0 0.5rem;
        &:hover {
          color: var(--blue-100);
        }
      }
    }
    small {
      color: var(--gray);
      font-weight: normal;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      div {
        margin: 1rem 0;
      }
    }
  }
`
