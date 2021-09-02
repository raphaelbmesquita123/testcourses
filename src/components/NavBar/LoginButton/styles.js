import styled from 'styled-components'

export const LoginButtonContainer = styled.div`
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  border: 2px solid var(--blue-50);
  color: var(--blue-50);
  margin-right: 1rem;
  border-radius: 5px;
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    transform: scale(0.98);
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
  }
`

export const LoginContainer = styled.div`
  position: relative;

  form {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 2.5rem;
    z-index: 3;
    left: -3rem;
    padding: 1rem;
    background: var(--blue-700);
    border-radius: 5px;

    input {
      margin-top: 1rem;
      padding: 0.5rem;
      border-radius: 5px;

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
      border-radius: 5px;
      &:hover {
        filter: brightness(0.8);
      }
      &:active {
        transform: scale(0.98);
      }
    }
  }
`

