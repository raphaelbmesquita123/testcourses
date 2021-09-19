import styled from 'styled-components'
import background from '../../images/courseDescriptionBackground.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: calc(100vh - 4.5rem);
  section {
    height: 40vh;
    width: 100%;
    z-index: -1;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: rgb(2, 57, 83);
      opacity: 0.85;

      h1 {
        font-size: 3rem;
        font-weight: 700;
        color: var(--gray);
        text-align: center;
        cursor: pointer;

        @media (max-width: 600px) {
          font-size: 2rem;
        }
      }
    }
  }
`

export const ValidationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--blue-500);
  height: calc(100vh - 40vh - 4.5rem);
  width: 100%;
  p {
    text-align: center;
    max-width: 600px;
    color: var(--gray);
  }
  form {
    display: flex;
    margin-top: 2rem;

    select,
    input {
      padding: 1rem 2rem;
      margin: 0.5rem;
      border-radius: 5px;
      border: none;
    }

    button {
      padding: 1rem 2rem;
      margin: 0.5rem;
      border-radius: 5px;
      background: var(--blue-50);
      border: none;
      transition: all 0.2s;
      &:hover {
        background: var(--blue-100);
        color: var(--gray);
      }
    }

    @media (max-width: 650px) {
      flex-direction: column;
    }
  }
`
