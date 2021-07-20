import styled from 'styled-components'

export const Container = styled.div `
    .ourCourses{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1080px;
        margin: 0 auto;
        padding: 2rem 0;
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
`
