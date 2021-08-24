import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 0.8rem;

    p,
    a {
      position: relative;
      text-transform: uppercase;
      font-size: 0.8rem;
      color: var(--blue-500);
      font-weight: bold;
      text-decoration: none;
      cursor: pointer;
      span {
        position: absolute;
        background: red;
        border-radius: 100%;
        color: white;
        text-align: center;
        margin: auto 0;
        width: 1.2rem;
        height: 1.2rem;
        padding-top: 0.2rem;
        top: -0.2rem;
        left: -1.7rem;
      }
      &:last-child {
        margin-top: 0.2rem;
        cursor: pointer;
        color: var(--blue-100);
      }
    }
  }
  a {
    text-decoration: none;
    section {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border: 3px solid var(--blue-500);
      border-radius: 100%;
      cursor: pointer;
      text-transform: uppercase;
    }
  }
`
