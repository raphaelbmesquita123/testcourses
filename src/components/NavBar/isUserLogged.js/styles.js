import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    div{
        display: flex;
        flex-direction: column;
        align-items:flex-end;
        margin-right: 0.8rem;

        p, a{
            text-transform: uppercase;
            font-size: 0.8rem;
            color: var(--blue-500);
            font-weight: bold;
            text-decoration:none;
        }
        a{
            margin-top: 0.2rem;
            cursor: pointer;
            color: var(--blue-100);
        }
    }
    
    section{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border: 3px solid var(--blue-500);
        border-radius: 100%;
        cursor: pointer;
        
        span{
            font-weight: bold;
            color: var(--blue-500);
            font-size: 1.2rem;
            text-decoration:none;
        }
        
        @media (max-width:600px) {
            width: 40px;
            height: 40px;
            span{
                font-size: 0.9rem;
            }
        }
    }
`