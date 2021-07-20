import styled from 'styled-components'


export const ContainerMessage = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    height: 2rem;
    background-color: var(--blue-500);
    color: var(--white);

    h1{
        font-size: 1rem;
        font-weight: normal;
        letter-spacing: 2px;
    }
    
    @media (max-width: 600px) {
        h1{
            font-size: 0.7rem;
        }
    }
`