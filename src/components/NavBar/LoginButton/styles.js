import styled from 'styled-components'

export const LoginContainer = styled.div`
  position: relative;

  form{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 2.5rem;
    z-index: 3;
    left: -3rem;
    padding: 1rem;
    background: var(--blue-500);
    
    input {
      margin-top: 1rem;
      padding: 0.5rem;
      &:first-child {
        margin-top: 0;
      }
    }

    span {
      background: red;
      font-size: 0.7rem;
      color: white;
      padding: 0.3rem;
    }
    button {
      font-size: 0.8rem;
      padding: 0.3rem;
      margin-top: 1rem;
      border: none;
      background: var(--gray);
      color: var(--blue-500);
    }
  }
`

export const LoginButtonContainer = styled.div`
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  border: 2px solid var(--blue-500);
  color: var(--blue-500);
  margin-right: 1rem;

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
  }
`
