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

        span{
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
            flex-direction: row;
            justify-content: center;
            align-items: center;
            max-width: 1080px;
            margin: 3rem 2rem;
            img{
                width: auto;
                height: 17rem;
            }

            span{
                margin-left: 1rem;
                text-align: justify;
            }

            @media (max-width: 800px){
                flex-direction: column;
                span{
                    margin: 0;
                    padding: 2rem 0 0 0;
                }
            }
        }

        @media (max-width: 600px) {
            h1{
                font-size: 1.5rem
            }
        }
    }

    .contactUs{
        display: flex;
        justify-content: center; 
        background: linear-gradient(360deg, rgba(46,63,108,1) 0%, rgba(33,69,156,1) 100%);
        padding: 6rem 1rem;

        form{
            display: flex;
            flex-direction: column;
            width: 70%;
            min-width: 22rem;
            max-width:1080px;

            input{
                padding:1rem;
                margin-top: 1rem;
                font-size: 1rem;
                color: white;
                background: var(--blue-900);
                font-family: 'Arial';
                box-shadow: -5px 5px 5px rgba(0,0,0,10%);
                border: 1px solid var(--blue-900);

                &:first-child{
                    margin: 0;
                }
                
                &:focus{
                    outline: 0;
                    border: 1px solid var(--white);
                }
                &::placeholder{
                    color: white;
                }
            }
            
            textarea{
                margin-top: 1rem;
                padding: 1rem;
                font-size: 1rem;
                border: none;
                background: var(--blue-900);
                height: 10rem;
                color: white;
                box-shadow: -5px 5px 5px rgba(0,0,0,10%);
                border: 1px solid var(--blue-900);
                
                &:focus{
                    box-shadow: 0 0 0 0;
                    outline: 0;
                    border: 1px solid var(--white);
                }
                &::placeholder{
                    color: white;
                    font-family: 'Arial';
                }
            }
            
            input[type=submit]{
                box-shadow: 0 0 0 0;
                border: 0 none;
                outline: 0;
                background: var(--blue-900);
                cursor: pointer;
                &:hover{
                    background: var(--blue-500);
                }
            }
        }
    }
    `
