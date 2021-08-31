import styled from 'styled-components'

export const SlideContainer = styled.div`
  position: fixed;
  background-color: var(--blue-900);
  width: 100%;
  height: 100vmax;
  top: 0;
  z-index: 3;
  left: ${(props) => props.left};
  transition: left 0.5s ease-in-out;

  div {
    position: relative;
    width: 100%;
    height: 100%;

    .closeSlide {
      color: white;
      position: absolute;
      top: 1.2rem;
      left: 1.5rem;
      font-size: 1.5rem;
      cursor: pointer;
    }

    .openSlide {
      display: ${(props) => props.display};
      color: var(--blue-500);
      position: absolute;
      top: 1.2rem;
      right: -2.5rem;
      font-size: 2rem;
      cursor: pointer;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 95%;
      margin: 6rem auto;
    }
  }
`

export const SlideMenuButton = styled.a`
  color: var(--blue-500);
  color: ${(props) => props.color};
  align-items: flex-start;
  padding: 2rem;
  width: 100%;
  margin: 0;
  margin-top: 0.5rem;
  background: var(--blue-700);
  border-left: ${(props) => props.marginLeft};
  transition: all 0.2s ease;
  text-decoration: none;

  &:last-child {
    margin-left: 0;
  }
  &:hover {
    color: var(--white);
    background: var(--blue-100);
  }
`
