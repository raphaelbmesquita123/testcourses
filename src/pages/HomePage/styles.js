import styled from 'styled-components'

export const CarouselContainer = styled.div`
  div {
    position: relative;
    height: calc(100vh - 5.5rem);

    section {
      position: absolute;
      bottom: 3rem;
      left: 50%;
      transform: translateX(-50%);
      color: var(--gray);
      width: 1000px;

      h2 {
        font-size: 3rem;
      }
      p {
        margin-top: 1rem;
      }
    }

    img {
      height: 100%;
    }

    @media (max-width: 600px) {
      section {
        width: 80%;
        left: 50%;
        transform: translateX(-50%);
        h2 {
          font-size: 2rem;
        }
        p {
          margin-top: 1rem;
          text-align: justify;
        }
      }
    }
  }
`

export const Container = styled.div`
  .logoCasousel {
    background: var(--blue-500);
    overflow: hidden;
    img {
      padding: 1rem 2rem;
    }
  }
  .ourCourses {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 4rem 2rem;

    h1 {
      color: var(--blue-500);
      text-transform: uppercase;
    }

    section {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 3rem;
    }
  }

  .whyTestcourses {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(./background.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 6rem 2rem;
    flex-wrap: wrap;

    div {
      width: 50%;
      background: var(--blue-500);
      height: 100%;
      min-width: 22rem;
      border-radius: 2rem 0 2rem 0;

      h1 {
        color: var(--gray);
        padding: 2rem 2rem 0 2rem;
        text-transform: uppercase;
      }

      p {
        text-align: justify;
        padding: 2rem 2rem 2rem 2rem;
        color: var(--gray);
      }
    }
  }

  .certificateContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;

    h1 {
      margin-top: 2rem;
      color: var(--blue-500);
      text-transform: uppercase;
    }
    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      max-width: 1080px;
      margin: 3rem 2rem;

      img {
        width: auto;
        height: 17rem;
      }

      span {
        margin-left: 1rem;
        text-align: justify;
      }

      @media (max-width: 800px) {
        flex-direction: column;
        span {
          margin: 0;
          padding: 2rem 0 0 0;
        }
      }
    }

    @media (max-width: 600px) {
      h1 {
        font-size: 1.5rem;
      }
    }
  }
`
