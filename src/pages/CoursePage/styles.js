import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2rem 3rem;
    background-color: var(--blue-500);
    min-height: 100vh;

    @media (max-width: 600px){
        padding:2rem;
    } 
    
    h1{
        margin: 0 auto 2rem auto;
        color: var(--gray);
    }
    div{
        display: flex;
        flex-direction: column;
        position: relative;
        section{
            display: flex;
            justify-content: space-between;
            button{
                padding: 0.5rem;
                margin-top: 1rem;
                border: none;
                text-transform: uppercase;
                background: var(--gray);

                &:disabled{
                    opacity: 0.5;
                }
            }
        }
    }
    .progressbar{
        width: 100%;
        margin-top: 1rem;
    }
`