import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding-bottom: 2rem;
  section {
    width: 100vw;
    height: 50vh;
    z-index: -1;
    background-image: url(/fromHome.png);
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
export const TextContainer = styled.p`
  max-width: 1080px;
  margin: 0 auto;
  text-align: justify;
  padding: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: var(--gray);
  letter-spacing: 1px;
  
  h1{
    color: var(--blue-700);
    padding: 1rem 0;
    margin-top: 1rem;

    &:first-child{
      margin-top: 0rem;
    }
  }
`