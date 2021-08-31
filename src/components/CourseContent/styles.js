import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  video {
    width: 100%;
    max-width: 1080px;
  }
  h3 {
    align-self: flex-start;
    padding: 0.5rem 0;
    color: var(--gray);
  }
`

export const TextContainer = styled.p`
  max-width: 1080px;
  padding: 1rem;
  background-color: var(--gray);
  letter-spacing: 1px;
  height: ${(props) => props.height};
  overflow: scroll;

  @media (max-width: 600px) {
      max-height: 20rem;
      overflow: scroll;
    }
`
