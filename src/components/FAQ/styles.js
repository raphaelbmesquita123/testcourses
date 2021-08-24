import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  min-height: 4rem;
  background: white;
  width: 100%;
  padding: 1rem;
  margin: 1rem;

  .question {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h3 {
      font-weight: bold;
      font-size: 1.3rem;
      color: var(--blue-500);
    }

    small {
      font-size: 2rem;
      color: var(--blue-500);
      cursor: pointer;
      margin-top: 0.5rem;
    }
  }

  .answer {
    display: flex;
    justify-content: flex-start;
    padding-top: 2rem;
    color: var(--blue-100);
  }
`

export const AnswerContainer = styled.div`
    display: ${(value) => value.display};
    justify-content: flex-start;
    padding-top: 2rem;
    color: var(--blue-100);
`
