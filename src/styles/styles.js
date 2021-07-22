import styled from 'styled-components'

export const CarouselContainer = styled.div`
    div{
        position: relative;
        height: calc(100vh - 5.5rem);

        section{
            position: absolute;
            bottom: 3rem;
            left: 50%;
            transform: translateX(-50%);
            color: var(--gray);
            width: 1000px;
            
            h2{
                font-size:3rem;
            }
            p{
                margin-top: 1rem;
            }
        }


        img{
            height: 100%;
            /* width: 150%; */
        }

        @media (max-width: 600px) {
            section{
                width: 80%;
                left: 50%;
                transform: translateX(-50%);
                h2{
                    font-size:2rem;
                }
                p{
                    margin-top: 1rem;
                    text-align: justify;
                }
            }
        }
    }

`

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

export const FooterContainer = styled.footer`
    width: 100%;
    background-color: var(--blue-500);
    padding: 0.8rem;
    section{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items:center;
        font-weight: normal;
        font-size: 0.8rem;
        max-width: 1080px;
        margin: 0 auto;
        a{
            text-decoration: none;
            color: var(--gray);

            &:hover{
                color: var(--blue-100)
            }
        }

        div{
            a{
                font-size: 1.2rem;
                margin: 0 0.5rem;        
                &:hover{
                color: var(--blue-100)
            }
            }
        }
        small{
            color: var(--gray);
            font-weight: normal;
        }

        @media (max-width: 600px){
            flex-direction: column;
            div{
                margin: 1rem 0;
            }

        }
    }
`

