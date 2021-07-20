import styled from 'styled-components'

export const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 16rem;
    padding: 1rem;
    transition: transform 0.2s ease-in-out;

    img{
        width: 100%;
        height: auto;
    }

    a{
        padding:1rem;
        width: 100%;
        background: var(--blue-500);
        color: var(--gray);
        text-decoration: none;
        cursor: pointer;
    }

    &:hover{
        transform: scale(1.05);
    }
`