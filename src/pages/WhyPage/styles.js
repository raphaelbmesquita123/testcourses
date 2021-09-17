import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  section {
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
      background-image: url(./whyPage.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      /* background-attachment: fixed; */
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
      animation: fadeIn 2s;

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
        transition: all 0.5s;

        &:hover {
          transform: scale(0.98);
        }

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
  }

  .textWhy {
    display: flex;
    width: 100%;
    padding: 4rem 2rem;
    justify-content: center;

    p {
      text-align: justify;
      max-width: 1080px;
    }
  }

  .forProfessionals {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--blue-900);
    padding: 4rem 2rem;

    h1 {
      padding: 0;
      padding-bottom: 2rem;
      color: var(--white);
      font-size: 2rem;
      text-transform: uppercase;
    }
    div {
      display: flex;
      justify-content: center;
      max-width: 1080px;
      align-items: center;
      p {
        text-align: justify;
        padding: 2rem 2rem 2rem 0;
        min-width: 350px;
        color: var(--gray);
      }
      img {
        height: 12rem;
        margin: 0;
        width: auto;
      }

      @media (max-width: 600px) {
        flex-direction: column-reverse;
        p {
          padding: 2rem;
          margin-top: 1rem;
        }
        img {
          height: auto;
          width: 90%;
        }
      }
    }
  }
  .FAQ {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    background: var(--gray);

    h1 {
      color: var(--blue-500);
      margin-bottom: 3rem;
      text-transform: uppercase;
    }
  }
  .contactUs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      360deg,
      rgba(46, 63, 108, 1) 0%,
      rgba(33, 69, 156, 1) 100%
    );
    padding: 4rem 3rem;
    h1 {
      text-transform: uppercase;
      margin: 0 0 3rem 0;
      color: var(--gray);
      text-align: center;
    }
    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-width: 22rem;
      max-width: 1080px;

      input {
        padding: 1rem;
        margin-top: 1rem;
        font-size: 1rem;
        color: white;
        background: var(--blue-900);
        font-family: 'Arial';
        box-shadow: -5px 5px 5px rgba(0, 0, 0, 10%);
        border: 1px solid var(--blue-900);

        &:first-child {
          margin: 0;
        }

        &:focus {
          outline: 0;
          border: 1px solid var(--white);
        }
        &::placeholder {
          color: white;
        }
      }

      textarea {
        margin-top: 1rem;
        padding: 1rem;
        font-size: 1rem;
        border: none;
        background: var(--blue-900);
        height: 10rem;
        color: white;
        box-shadow: -5px 5px 5px rgba(0, 0, 0, 10%);
        border: 1px solid var(--blue-900);

        &:focus {
          box-shadow: 0 0 0 0;
          outline: 0;
          border: 1px solid var(--white);
        }
        &::placeholder {
          color: white;
          font-family: 'Arial';
        }
      }

      button {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        background: var(--blue-900);
        cursor: pointer;
        height: 3.5rem;
        margin-top: 1rem;
        color: white;
        &:hover {
          background: var(--blue-500);
        }
      }
    }
  }
`
