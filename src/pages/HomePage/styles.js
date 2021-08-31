import styled from 'styled-components'

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 100%;
  height: calc(100vh - 4.5rem);
  overflow: hidden;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url(./fromHome.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    div {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgb(2, 57, 83);
      opacity: 0.85;
    }
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 700px;
    padding: 2rem;
    animation: fadeIn 1s;

    .fadeIn {
      -webkit-animation-name: fadeIn;
      animation-name: fadeIn;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    h1 {
      font-size: 4rem;
      font-weight: 700;
      color: var(--gray);
      text-align: center;
      cursor: pointer;

      @media (max-width: 600px) {
        font-size: 3.2rem;
      }
    }

    h3 {
      margin-top: 1rem;
      color: var(--blue-50);
      text-align: center;
      max-width: 600px;

      @media (max-width: 600px) {
        font-size: 0.8rem;
      }
    }
  }

  a {
    color: var(--blue-50);
    position: absolute;
    font-size: 3rem;
    bottom: 0.5rem;
    right: 1rem;
  }
`
export const Container = styled.div`
  .logoCasousel {
    background: var(--blue-900);
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
      background: var(--blue-900);
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
