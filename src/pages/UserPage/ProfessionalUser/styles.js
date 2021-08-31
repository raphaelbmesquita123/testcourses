import styled from 'styled-components'

export const Container = styled.div`
  .helloContainer {
    background-color: var(--blue-500);
    p {
      display: block;
      padding: 2rem;
      text-align: center;
      color: var(--white);
    }
  }

  main {
    display: flex;
    justify-content: space-around;
    background-color: var(--blue-500);

    div {
      padding: 1rem;
      width: 100%;
      text-align: center;
      background-color: var(--blue-100);
      color: var(--white);
      cursor: pointer;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;

      p {
        text-transform: uppercase;
      }

      @media (max-width: 600px) {
        font-size: 0.7rem;
      }
    }
  }

  section {
    display: flex;
    justify-content: center;
    background-color: var(--blue-100);
    padding: 3rem 2rem;

    .basket {
      min-height: calc(100vh - 300px); 
      margin-top: 1rem;
      button {
        padding: 0.5rem;
        margin-top: 1rem;
        position: relative;
        float: right;
        border: none;
        color: var(--gray);
        background: var(--blue-500);

        &:active {
          transform: scale(0.98);
        }
      }
      section {
        background: #ffffff;
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 112px;
        border-radius: 6px;
        justify-content: space-between;
      }
      .product {
        display: flex;
      }
      .description {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.154px;
        color: #242d60;
        height: 100%;
        width: 100%;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
      }
      img {
        border-radius: 6px;
        margin: 10px;
        width: 54px;
        height: 57px;
      }
      h3,
      h5 {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.154px;
        color: #242d60;
        margin: 0;
      }
      h5 {
        opacity: 0.5;
      }
      #checkout-button {
        height: 36px;
        background: #556cd6;
        color: white;
        width: 100%;
        font-size: 14px;
        border: 0;
        font-weight: 500;
        cursor: pointer;
        letter-spacing: 0.6;
        border-radius: 0 0 6px 6px;
        transition: all 0.2s ease;
        box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
      }
      #checkout-button:hover {
        opacity: 0.8;
      }
    }
  }
`

export const CoursesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: calc(100vh - 300px); 
`

export const CertificatesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  min-height: calc(100vh - 300px); 
  div{
    position: relative;
    margin: 1rem;
    
    button{
      position: absolute;
      top: 15rem;
      padding: 0.5rem;
      border: none;
      background: var(--gray);
      color: var(--blue-500);
      border-radius: 6px;

      &:active{
        transform: scale(0.98);
      }
    }
  }
`


export const ItemBasket = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60vw;
  min-width: 350px;
  padding: 1.5rem;
  background: var(--gray);
  color: var(--blue-900);
  box-shadow: -5px 10px 10px var(--blue-500);
  border-top: 1px solid var(--blue-100);
  margin-top: 0.4rem;
  
  &:first-child {
    margin-top: 0rem;
  }

  h3 {
    text-align: justify;
    min-width: 70%;
  }

  span {
  }

  .deletCourse {
    cursor: pointer;
  }
`

