import styled from 'styled-components'

export const Container = styled.div `
    .ourCourses{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        h1{
            margin-top: 2rem;
            color: var(--blue-500);
        }

        section{
            display: flex;
            align-items: center;
            justify-content:center;
            flex-wrap: wrap;
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 0 2rem 0;
        }
    }
    
    .messageContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--blue-500);
        padding: 2rem;

        h1{
            color: var(--gray);
            margin-top: 2rem;
        }

        text{
            margin-top: 2rem;
            max-width: 1080px;
            text-align: justify;
            color: var(--gray);
        }
        div{
            display: flex;
            justify-content: flex-end;
            width: 100%;
            max-width: 1080px;
            margin: 1rem 0;
            a{
                text-decoration:none;
                background-color: var(--gray);
                padding: 0.7rem;
                color: var(--blue-500);
                cursor: pointer;
                margin-top: 1rem;
            }
        }
    }

    .certificateContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;

        h1{
            margin-top: 2rem;
            color: var(--blue-500);
        }
        div{
            display: flex;
            justify-content: center;
            max-width: 1080px;
            margin-top: 2rem;
            flex-wrap: wrap;
            img{
                width: 25rem;
            }

            text{
                padding: 1rem;
                margin-top: 1rem;
                text-align: justify;
            }
        }

        @media (max-width: 600px) {
            h1{
                font-size: 1.5rem
            }
        }
    }
`
