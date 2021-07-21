import styled from 'styled-components'

export const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width: 20rem;
    transition: transform 0.2s ease-in-out;
    margin: 1rem;

    img{
        width: 100%;
        height: auto;
    }

    a{
        display: flex;
        justify-content:center;
        align-items: center;
        background: var(--blue-500);
        color: var(--gray);
        text-decoration: none;
        cursor: pointer;
        width: 100%;
        height: 2.5rem;
    }

    &:hover{
        transform: scale(1.05);
    }
`