import styled from 'styled-components'

export const Container = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center;
    background: orange; */
    width: 100%;
    h1{
        background: var(--blue-500);
        padding: 5rem 0;
        color: var(--white);
        width: 100%;
        text-align: center;
    }

    .textWhy{
        display: flex;
        width: 100%;
        padding: 4rem 2rem;
        justify-content:center;
        p{
            text-align: justify;
            max-width: 1080px;

        }
    }

    .forProfessionals{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--blue-500);
        padding: 4rem 2rem;
        h1{
            padding: 0;
            padding-bottom: 2rem;
        }
        div{
            display: flex;
            justify-content:center;
            max-width: 1080px;
            align-items: center;
            p{
                text-align: justify;
                padding: 2rem 2rem 2rem 0;
                min-width: 350px;
                color: white;
            }
            img{
                height: 8rem;
                margin: 0;
                width: auto;
            }

            @media (max-width: 600px){
                flex-direction: column-reverse;
                p{
                    padding: 2rem;
                    margin-top: 1rem;
                }
                img{
                    height: auto;
                    width: 90%;
                }
            }
        }
        img{
            margin-top: 2rem;
            width: 90%;
            height: auto;
            max-width: 1080px;
            @media (max-width: 600px){
                margin-top: 1rem;
            }
        }
    }
`