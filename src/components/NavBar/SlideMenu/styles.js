import styled from 'styled-components'

export const SlideContainer = styled.div`
  position: fixed;
  background-color: var(--blue-900);
  width: 100%;
  height: 100vmax;
  top: 0;
  z-index: 3;
  left: ${props => props.left};
  transition: left 0.5s ease-in-out;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;

    .closeSlide {
      color: white;
      position: absolute;
      top: 2.7rem;
      left: 1.5rem;
      font-size: 1.5rem;
      cursor: pointer;
    }

    .openSlide {
      display: ${props => props.display};
      color: var(--blue-500);
      position: absolute;
      top: 2.7rem;
      right: -2.5rem;
      font-size: 2rem;
      cursor: pointer;
    }

    ul {
      display: flex;
      flex-direction: column;
      a {
        font-size: 2rem;
        color: white;
        margin-top: 2rem;

        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
`
