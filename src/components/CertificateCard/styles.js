import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    position: relative;
    height: 15rem;
    width: auto;

    h1{
        position: absolute;
        width: 100%;
        top: 1rem;
        color: var(--white);
        margin: 0 auto;
        text-align: center;
    }
    
    h3{
        position: absolute;
        width: 100%;
        color: white;
        bottom: 5.2rem;
        text-align: center;
    }
`