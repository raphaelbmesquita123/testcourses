import styled from 'styled-components'

export const Container = styled.div`
    .helloContainer{
        background-color: var(--blue-500);
        p{
            display: block;
            padding: 2rem;
            text-align: center;
            color: var(--white);
        }
    }

    main{
        display: flex;
        justify-content: space-around;

        div{
            padding: 1rem;
            width: 100%;
            text-align: center;
            background-color: var(--blue-100);
            color: var(--white);
            cursor: pointer;
        }
    }

    section{
        display: flex;
        justify-content: center;
        background-color: var(--blue-100);
        padding: 3rem 2rem;
    }
`

export const CoursesContainer = styled.div`

`