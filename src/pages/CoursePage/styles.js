import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;
  background-color: var(--blue-500);
  min-height: 100vh;

  @media (max-width: 600px) {
    padding: 2rem;
  }
  section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1080px;
    margin-bottom: 1rem;
    h1 {
      font-size: 2rem;
      color: var(--gray);
    }

    button{
      padding: 1rem;
      border: none;
      background-color: red;
      color: white;
      border-radius: 0.5rem;
      box-shadow: -2px 2px 5px var(--blue-900);
      &:active {
        transform: scale(0.98);
      }

      @media (max-width: 600px) {
        padding: 0.5rem;
      }
    }

  }
  div {
    display: flex;
    flex-direction: column;
    position: relative;
    section {
      display: flex;
      justify-content: space-between;
      button {
        padding: 0.5rem;
        margin-top: 1rem;
        border: none;
        text-transform: uppercase;
        color: black;
        background-color: var(--gray);

        &:disabled {
          opacity: 0.5;
        }
      }
    }
  }

  .progressbar {
    width: 100%;
    max-width: 1080px;
    margin: 1rem auto 0 auto;
  }
`


export const ProgressBarContainer = styled.div`
    width: 100%;
    max-width: 1080px;
    margin: 1rem auto 0 auto;
`
