import styled from 'styled-components'

export const SignUpContainer = styled.div`
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  background-color: var(--blue-500);
  color: white;

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
  }
`

export const SignUpModal = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  background: var(--blue-500);

  .closeModal {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    color: white;
    cursor: pointer;
  }

  h1 {
    color: white;
    margin: 0 auto;
    padding: 1rem 0 2rem 0;
  }
  form {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: var(--blue-100);

    input {
      margin-top: 1rem;
      padding: 0.7rem;
      &:focus {
        border: none;
      }
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
      padding: 1rem;
      border: none;
      margin-top: 1rem;
      background: var(--gray);
      color: var(--blue-500);

      &:disabled {
        opacity: 0.5;
      }
    }
    .recaptcha {
      margin-top: 1rem;
    }
  }
`

export const SignUpModalContainer = styled.div``