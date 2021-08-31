import styled from 'styled-components'

export const SignUpContainer = styled.div`
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  background-color: var(--blue-50);
  color: var(--blue-900);
  border-radius: 5px;
  font-weight: 500;

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
  padding: 0.5rem;
  background: var(--blue-900);

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
    background-color: var(--blue-900);
    border-radius: 5px;


    input {
      margin-top: 1rem;
      padding: 1rem 0.7rem;
      border-radius: 5px;
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
      border-radius: 5px;

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