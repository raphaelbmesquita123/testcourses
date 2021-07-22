import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    section{
        display: flex;
        justify-content:center;
        align-items:center;
        color: var(--white);
        background-image: url(./fromHome.png);
        background-repeat: no-repeat;
        background-size:cover;
        background-position: center;
        width: 100%;
        height: calc(100vh - 5.5rem);

        h1{
            padding: 2rem;
            font-size: 5rem;
            text-shadow: -5px 5px 10px rgba(0,0,0,50%);

            @media (max-width: 600px){
                width: 90%;
                font-size: 3rem;
            }
        }
    }

    .textWhy{
        display: flex;
        width: 100%;
        padding: 4rem 4rem;
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

        h2{
            padding: 0;
            padding-bottom: 2rem;
            color: var(--white);
            font-size: 2rem;
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

    .forCompanies{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4rem 2rem;
        h2{
            padding-bottom: 2rem;
            color: var(--blue-500);
            font-size: 2rem;
        }
        div{
            display: flex;
            justify-content:center;
            max-width: 1080px;
            align-items: center;
            p{
                text-align: justify;
                padding: 0 2rem 2rem 2rem;
                min-width: 350px;
                color: var(--blue-500);
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