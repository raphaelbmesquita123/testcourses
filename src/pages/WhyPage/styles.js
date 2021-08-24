import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    background-image: url(./fromHome.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    width: 100%;
    height: calc(100vh - 5.5rem);

    h1 {
      padding: 2rem;
      font-size: 5rem;
      text-shadow: -5px 5px 10px rgba(0, 0, 0, 50%);

      @media (max-width: 600px) {
        width: 90%;
        font-size: 3rem;
      }
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
    background: var(--blue-500);
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
        color: white;
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
    padding: 1rem 2rem;
    background: var(--gray);

    h1 {
      color: var(--blue-500);
      margin: 2rem 0;
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
      width: 70%;
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
